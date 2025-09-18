"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'is-popup'?: string, 'chatbot-id'?: string }, HTMLElement> & { open?: () => void };
    }
  }
}

export default function HelpButton() {
  const openChatbot = () => {
    // The Zapier chatbot component might not be immediately available.
    // We can directly call the 'open' method on the element.
    const chatbot = document.querySelector('zapier-interfaces-chatbot-embed') as (HTMLElement & { open?: () => void }) | null;
    
    if (chatbot && typeof chatbot.open === 'function') {
      chatbot.open();
    } else {
      console.error('Zapier chatbot not found or is missing the open() method.');
      // As a fallback, you might want to try again after a short delay
      setTimeout(() => {
        const delayedChatbot = document.querySelector('zapier-interfaces-chatbot-embed') as (HTMLElement & { open?: () => void }) | null;
        if (delayedChatbot && typeof delayedChatbot.open === 'function') {
          delayedChatbot.open();
        }
      }, 500);
    }
  };

  return (
    <Button variant="ghost" onClick={openChatbot}>
      <MessageSquare className="mr-2 h-4 w-4" />
      Help
    </Button>
  );
}
