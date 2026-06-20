import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, x-ttt-secret",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const expected = Deno.env.get("TTT_PUBLISH_SECRET");
  if (!expected) {
    return json({ error: "not configured" }, 500);
  }

  const provided = req.headers.get("x-ttt-secret");
  if (!provided || provided !== expected) {
    return json({ error: "unauthorized" }, 401);
  }

  if (req.method !== "POST") {
    return json({ error: "method not allowed" }, 405);
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: "invalid json" }, 400);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { action } = body ?? {};

  try {
    switch (action) {
      case "create_draft": {
        const post = body.post;
        if (!post || typeof post !== "object") {
          return json({ error: "missing post" }, 400);
        }
        const insertRow = { ...post, is_published: false };
        const { data, error } = await supabase
          .from("posts")
          .insert(insertRow)
          .select("id, slug, is_published")
          .single();
        if (error) return json({ error: error.message }, 400);
        return json({ data });
      }

      case "list_posts": {
        const status = body.status as string | undefined;
        const limit = typeof body.limit === "number" ? body.limit : 50;
        let q = supabase
          .from("posts")
          .select("id,title,slug,is_published,publish_date,category_id,created_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (status === "draft") q = q.eq("is_published", false);
        else if (status === "published") q = q.eq("is_published", true);
        const { data, error } = await q;
        if (error) return json({ error: error.message }, 400);
        return json({ data });
      }

      case "list_categories": {
        const { data, error } = await supabase
          .from("categories")
          .select("id,name,slug")
          .order("name", { ascending: true });
        if (error) return json({ error: error.message }, 400);
        return json({ data });
      }

      case "publish": {
        const post_id = body.post_id;
        if (!post_id) return json({ error: "missing post_id" }, 400);
        const { data, error } = await supabase
          .from("posts")
          .update({ is_published: true, publish_date: new Date().toISOString() })
          .eq("id", post_id)
          .select()
          .single();
        if (error) return json({ error: error.message }, 400);
        return json({ data });
      }

      case "unpublish": {
        const post_id = body.post_id;
        if (!post_id) return json({ error: "missing post_id" }, 400);
        const { data, error } = await supabase
          .from("posts")
          .update({ is_published: false })
          .eq("id", post_id)
          .select()
          .single();
        if (error) return json({ error: error.message }, 400);
        return json({ data });
      }

      default:
        return json({ error: "unknown action" }, 400);
    }
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});
