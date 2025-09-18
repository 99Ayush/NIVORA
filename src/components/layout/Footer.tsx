import { Home, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <Home className="h-8 w-8" />
               <span className="text-2xl font-bold">Nivora</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-md">
              Your one-stop solution to finding the best PGs, messes, and flats near your college. We provide AI-powered insights and genuine reviews to help you find your home away from home.
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/listings" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Listings
                  </Link>
                </li>
                 <li>
                  <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Other Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contact</h3>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <a href="mailto:contact@nivora.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                contact@nivora.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nivora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
