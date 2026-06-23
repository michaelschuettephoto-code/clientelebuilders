## Create admin account for michaelschuettephoto@gmail.com

Good news: the database is already wired so that this exact email auto-gets the **Admin** role the moment an account is created with it. The `handle_new_user` trigger checks for `michaelschuettephoto@gmail.com` and assigns `admin` automatically (everyone else gets `author`).

So we don't need to insert anything by hand — we just need an auth user to exist for that email.

### Two ways to do it (pick one)

**Option A — You set your own password (recommended)**
1. I'll confirm the `/admin/login` page has a working "Sign up" path (or temporarily expose one) so you can create the account yourself.
2. You go to the preview, sign up with `michaelschuettephoto@gmail.com` + a password you choose.
3. The trigger fires → profile created + admin role granted automatically.
4. You log in at `/admin/login` and you're in.

**Option B — I provision it for you with a temporary password**
1. I create the auth user server-side with a temporary password (e.g. via a one-off admin action using the service role).
2. Trigger auto-grants admin.
3. You log in at `/admin/login` with the temp password, then change it from the account settings.

### What I need from you
- **Which option?** (A is cleaner; B is faster if signup UI is locked down.)
- If **B**, confirm you want me to generate a temp password and show it to you once in chat so you can log in and rotate it.

No code or DB changes happen until you pick A or B.