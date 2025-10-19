import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch('https://legwhbvpveisgklqcrbq.supabase.co/functions/v1/sitemap');
        const xmlContent = await response.text();
        
        // Replace entire document with XML for proper sitemap rendering
        document.open();
        document.write(xmlContent);
        document.close();
      } catch (error) {
        console.error('Error fetching sitemap:', error);
        document.body.innerHTML = '<error>Failed to load sitemap</error>';
      }
    };
    
    fetchSitemap();
  }, []);

  return <div>Loading sitemap...</div>;
};

export default Sitemap;
