"use client";

import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'is-popup'?: string; 'chatbot-id'?: string; }, HTMLElement>;
    }
  }
}

export default function ZapierChatbot() {
  // Although the script is loaded in layout.tsx, this ensures the component is treated as a client component.
  useEffect(() => {
    // You can add any client-side initialization logic here if needed in the future.
  }, []);

  return (
    <zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cmfqvvoje000xr3lmbrcrbxw0'></zapier-interfaces-chatbot-embed>
  );
}
