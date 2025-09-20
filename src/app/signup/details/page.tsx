"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Suspense } from 'react';

const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  role: z.enum(['renter', 'owner']),
});

type SignupFormValues = z.infer<typeof signupSchema>;

function SignUpDetailsForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') === 'owner' ? 'owner' : 'renter';
  const { toast } = useToast();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
        name: '',
        email: '',
        password: '',
        role: role,
    }
  });

  const handleSignUp = async (data: SignupFormValues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(userCredential.user, {
        displayName: data.name,
      });

      console.log("New user role:", data.role);
      
      router.push('/');
      toast({
        title: "Account Created!",
        description: "You have been successfully signed up.",
      });
    } catch (error: any) {
      console.error("Error signing up: ", error);
      toast({
        title: "Sign Up Failed",
        description: error.message || "An unknown error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-muted/40">
        <Card className="w-full max-w-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSignUp)}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
                  <CardDescription>
                    You're signing up as a <span className="font-semibold capitalize">{role}</span>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="m@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/login" className="underline text-accent">
                      Log In
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Form>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default function SignUpDetailsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignUpDetailsForm />
        </Suspense>
    )
}
