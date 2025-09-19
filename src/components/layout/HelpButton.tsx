"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transform hover:scale-110 transition-transform"
              onClick={openChatbot}
            >
              <MessageSquare className="h-7 w-7" />
              <span className="sr-only">Open Chatbot</span>
            </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Need Help? Chat with us!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
