"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
      <path fill="#4285F4" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#34A853" d="M43.611,20.083L43.595,20.083C43.862,21.35,44,22.659,44,24c0,11.045-8.955,20-20,20c-5.268,0-10.046-2.053-13.48-5.49l5.657-5.657c1.556,1.453,3.566,2.348,5.823,2.348c3.868,0,7.152-2.583,8.344-6.143H44v-0.015L43.611,20.083z" />
      <path fill="#FBBC05" d="M10.52,18.51l-5.657,5.657C4.138,22.083,4,20.083,4,20c0-11.045,8.955-20,20-20c5.268,0,10.046,2.053,13.48,5.49l-5.657,5.657C30.152,13.417,27.368,12,24,12c-3.868,0-7.152,2.583-8.344,6.143L10.52,18.51z" />
      <path fill="#EA4335" d="M24,48c5.268,0,10.046-2.053,13.48-5.49l-5.657-5.657C30.152,40.583,27.368,42,24,42c-3.868,0-7.152-2.583-8.344-6.143l-5.136,0.372C12.152,41.417,17.368,48,24,48z" />
      <path fill="none" d="M0,0h48v48H0z" />
    </svg>
  );
}

export default function LoginProviderPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const title = role ? `Sign up as ${role}` : "Login to Nivora";
  const description = role ? "Use Google to create your account" : "Sign in to continue to your account";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-muted/40">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription>
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleSignIn} className="w-full">
              <div className="flex items-center justify-center">
                <GoogleIcon />
                <span className="ml-2">Sign in with Google</span>
              </div>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
