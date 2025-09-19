import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import StarlightBackground from '@/components/layout/StarlightBackground';
import ZapierChatbot from '@/components/layout/ZapierChatbot';
import HelpButton from '@/components/layout/HelpButton';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Nivora : Home away from Home',
  description: 'Find PGs, messes, and flats near your college with AI-powered insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></Script>
      </head>
      <body className="font-body antialiased relative">
        <StarlightBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
        <ZapierChatbot />
        <HelpButton />
      </body>
    </html>
  );
}
