'use client';

// interface EmbedProps {
//   html: string | TrustedHTML;
// }
// export default function Embed({ html }: EmbedProps) {
//   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// }
import React, { useEffect } from 'react';

export default function Embed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@rupadana.com"
      data-unique-id="rupadana.com"
      data-embed-type="creator"
      style={{ maxWidth: '780px', minWidth: '288px' }}
    >
      <section>
        <a target="_blank" href="https://www.tiktok.com/@rupadana.com?refer=creator_embed">
          @rupadana.com
        </a>
      </section>
    </blockquote>
  );
}
