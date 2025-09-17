"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function HelpButton() {
  const openChatbot = () => {
    const chatbot = document.querySelector('zapier-interfaces-chatbot-embed') as any;
    if (chatbot && chatbot.open) {
      chatbot.open();
    }
  };

  return (
    <Button variant="outline" onClick={openChatbot}>
      <MessageSquare className="mr-2 h-4 w-4" />
      Help
    </Button>
  );
}
