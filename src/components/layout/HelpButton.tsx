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
    try {
      const chatbot = document.querySelector('zapier-interfaces-chatbot-embed') as (HTMLElement & { open?: () => void }) | null;
      if (chatbot && typeof chatbot.open === 'function') {
        chatbot.open();
      } else {
        // Fallback in case the element isn't ready immediately
        setTimeout(() => {
          const delayedChatbot = document.querySelector('zapier-interfaces-chatbot-embed') as (HTMLElement & { open?: () => void }) | null;
          if (delayedChatbot && typeof delayedChatbot.open === 'function') {
            delayedChatbot.open();
          } else {
             console.error('Zapier chatbot not found or is missing the open() method.');
          }
        }, 500);
      }
    } catch (error) {
       console.error('Error opening Zapier chatbot:', error);
    }
  };

  return (
    <Button variant="ghost" onClick={openChatbot}>
      <MessageSquare className="mr-2 h-4 w-4" />
      Help
    </Button>
  );
}
