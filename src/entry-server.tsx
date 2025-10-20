import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query';
import App from './App';

export function render(url: string, initialData?: any) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
      },
    },
  });

  // Pre-populate the query cache with initial data
  if (initialData) {
    if (initialData.post) {
      queryClient.setQueryData(['post', initialData.post.slug], initialData.post);
    }
    if (initialData.posts) {
      queryClient.setQueryData(['posts'], initialData.posts);
      queryClient.setQueryData(['recent-posts'], initialData.posts);
    }
    if (initialData.tag && initialData.posts) {
      queryClient.setQueryData(['tag-posts', initialData.tag.slug], {
        tag: initialData.tag,
        posts: initialData.posts,
      });
    }
  }

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </QueryClientProvider>
  );
  
  // Serialize the query cache state
  const dehydratedState = dehydrate(queryClient);
  const stateScript = `<script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState).replace(/</g, '\\u003c')};</script>`;
  
  return html + stateScript;
}
