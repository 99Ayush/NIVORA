import { Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HelpButton from './HelpButton';

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Nivora</span>
        </Link>
        <div className="flex items-center gap-2">
          <HelpButton />
          <Button variant="outline">Login</Button>
        </div>
      </div>
    </header>
  );
}
