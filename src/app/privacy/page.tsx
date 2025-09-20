import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Nivora',
    description: 'Our privacy policy for using the Nivora platform.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <section className="py-12">
           <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl font-bold font-headline text-center">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground/90">
                <p className="text-sm text-muted-foreground text-center">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                    <p>We collect information you provide directly to us when you create an account, such as your name, email address, and password. We may also collect information you submit through reviews or other user-generated content features.</p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                    <p>We use the information we collect to operate, maintain, and provide you with the features and functionality of the Service. This includes personalizing your experience, communicating with you, and for security purposes to protect your account.</p>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">3. Data Security</h2>
                    <p>We use commercially reasonable safeguards to help keep the information collected through the Service secure. However, Nivora cannot ensure the security of any information you transmit to us or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed.</p>
                </div>

                 <div className="space-y-2">
                    <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
                    <p>We use third-party services like Firebase for authentication. These services may collect information about you. We recommend you review their privacy policies to understand how they handle your data.</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">5. Changes to This Policy</h2>
                    <p>We may modify or update this Privacy Policy from time to time, so you should review this page periodically. When we change the policy in a material manner, we will update the ‘last updated’ date at the top of this page.</p>
                </div>

                 <div className="space-y-2">
                    <h2 className="text-xl font-semibold">6. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact.nivora@gmail.com" className="text-accent hover:underline">contact.nivora@gmail.com</a>.</p>
                </div>
            </CardContent>
           </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
