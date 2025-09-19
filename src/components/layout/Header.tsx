import Link from 'next/link';
import { Menu } from 'lucide-react';
import AuthButton from './AuthButton';
import { Button } from '@/components/ui/button';
import NivoraLogo from './NivoraLogo';
import HelpDialog from './HelpDialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NivoraLogo className="h-6 w-6" />
          <span className="text-xl font-bold text-primary">Nivora</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
           <Link href="/team">
            <Button variant="ghost">Our Team</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <Link href="/marketplace">
            <Button variant="ghost">Marketplace</Button>
          </Link>
          <HelpDialog />
          <AuthButton />
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                 <Link href="/" passHref>
                  <SheetClose asChild><Button variant="ghost" className="justify-start">Home</Button></SheetClose>
                </Link>
                <Link href="/team" passHref>
                  <SheetClose asChild><Button variant="ghost" className="justify-start">Our Team</Button></SheetClose>
                </Link>
                <Link href="/contact" passHref>
                  <SheetClose asChild><Button variant="ghost" className="justify-start">Contact Us</Button></SheetClose>
                </Link>
                <div className="mt-4 border-t pt-4">
                  <Link href="/marketplace" passHref>
                    <SheetClose asChild><Button variant="ghost" className="justify-start w-full mb-2">Marketplace</Button></SheetClose>
                  </Link>
                  <HelpDialog />
                  <div className="mt-2">
                    <AuthButton />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
