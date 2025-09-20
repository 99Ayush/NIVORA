"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { User, Building } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();

  const handleRoleSelection = (role: 'renter' | 'owner') => {
    router.push(`/signup/details?role=${role}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-muted/40">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Join Nivora</CardTitle>
            <CardDescription>
              First, tell us who you are.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => handleRoleSelection('renter')} className="w-full" size="lg">
              <User className="mr-2 h-5 w-5" />
              Join as a Renter
            </Button>
            <Button onClick={() => handleRoleSelection('owner')} variant="outline" className="w-full" size="lg">
              <Building className="mr-2 h-5 w-5" />
              Join as an Owner
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
