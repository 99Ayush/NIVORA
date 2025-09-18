import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About & Contact - Nivora',
    description: 'Learn more about the Nivora and how to get in touch.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <section className="text-center w-full py-12 md:py-20 flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline mb-4">
            About Nivora
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nivora was born from a simple idea: to make finding a place to live near college easier for students. We are a team of passionate individuals who understand the challenges of finding the perfect PG, mess, or flat. Our mission is to provide a seamless, AI-powered platform that offers reliable listings and genuine reviews, helping you find your home away from home with confidence.
          </p>
        </section>

        <section className="py-12">
           <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline text-center">Get In Touch</CardTitle>
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
