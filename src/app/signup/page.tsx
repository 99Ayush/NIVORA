"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Briefcase, Home } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-muted/40">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">New User</CardTitle>
            <CardDescription>
              Are you a renter or a property owner?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => router.push('/login/provider?role=Renter')} className="w-full">
                <Home className="mr-2 h-4 w-4" />
                I am a Renter
            </Button>
            <Button onClick={() => router.push('/login/provider?role=Owner')} variant="outline" className="w-full">
               <Briefcase className="mr-2 h-4 w-4" />
                I am an Owner
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
