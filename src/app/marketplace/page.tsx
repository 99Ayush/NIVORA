import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Marketplace - Nivora',
    description: 'A place to buy useful products and services.',
};

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col items-center justify-center text-center">
        <div className="py-20">
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 text-primary">
            Under Construction
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            After finishing, you will be able to buy useful products and services such as carpenters, electricians, etc.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
