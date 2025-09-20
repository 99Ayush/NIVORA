import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - Nivora',
    description: 'Our terms and conditions for using the Nivora platform.',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <section className="py-12">
           <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl font-bold font-headline text-center">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground/90">
                <p className="text-sm text-muted-foreground text-center">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
                    <p>By accessing and using Nivora ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.</p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">2. User Conduct</h2>
                    <p>You agree to use the Service for lawful purposes only. You are prohibited from posting on or transmitting through the Service any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, fraudulent, racially, ethnically, or otherwise objectionable material of any kind.</p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">3. Listings and Content</h2>
                    <p>Nivora is a platform for information based on user-submitted reviews. We do not verify the accuracy of all listings and reviews. Users are responsible for their own due diligence before making any financial commitments. We are not responsible for any disputes that may arise between users and property owners.</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">4. AI-Powered Insights</h2>
                    <p>The AI-powered summaries are generated for informational purposes only and should not be considered as professional advice. This information is based on user-generated content and may not be entirely accurate or complete.</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
                    <p>In no event shall Nivora or its affiliates be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these page periodically. Your continued use of the Website or our service after any such change constitutes your acceptance of the new Terms.</p>
                </div>
            </CardContent>
           </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
