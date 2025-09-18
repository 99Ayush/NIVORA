import Link from 'next/link';
import AuthButton from './AuthButton';
import { Button } from '@/components/ui/button';
import NivoraLogo from './NivoraLogo';
import { MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NivoraLogo className="h-6 w-6" />
          <span className="text-xl font-bold text-primary">Nivora</span>
        </Link>
        <div className="flex items-center gap-2">
           <Link href="/team">
            <Button variant="ghost">Our Team</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <Button variant="ghost" data-is-open-button='true' data-chatbot-id='cmf6zmt930024ddn3qbkai5f8'>
            <MessageSquare className="mr-2 h-4 w-4" />
            Help
          </Button>
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
