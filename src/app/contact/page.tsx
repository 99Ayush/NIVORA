import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact - Nivora',
    description: 'How to get in touch with Nivora.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 flex items-center justify-center">
        <section className="py-12 w-full">
           <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl font-bold font-headline text-center">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Have questions or want to collaborate? Reach out to us!</p>
                <a href="mailto:contact.nivora@gmail.com" className="inline-flex items-center gap-2 text-lg text-accent hover:underline">
                    <Mail className="h-5 w-5" />
                    contact.nivora@gmail.com
                </a>
            </CardContent>
           </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
