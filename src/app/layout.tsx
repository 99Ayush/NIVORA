import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
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
        <Script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js' />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cmf6zmt930024ddn3qbkai5f8'></zapier-interfaces-chatbot-embed>
      </body>
    </html>
  );
}
