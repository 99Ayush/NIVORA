"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LogIn, UserPlus } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-muted/40">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome!</CardTitle>
            <CardDescription>
              Login or create an account to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => router.push('/login/provider')} className="w-full">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button onClick={() => router.push('/signup')} variant="outline" className="w-full">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
