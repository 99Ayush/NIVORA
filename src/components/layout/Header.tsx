import Link from 'next/link';
import HelpButton from './HelpButton';
import AuthButton from './AuthButton';
import { Button } from '@/components/ui/button';
import NivoraLogo from './NivoraLogo';

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NivoraLogo className="h-6 w-6" />
          <span className="text-xl font-bold text-primary">Nivora</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/contact">
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <HelpButton />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
