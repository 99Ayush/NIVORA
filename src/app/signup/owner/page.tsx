"use client";

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { submitOwnerApplicationAction } from '@/app/actions';

const ownerSignupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  propertyName: z.string().min(3, { message: 'Property name is required.' }),
  city: z.string().min(2, { message: 'City is required.' }),
  pincode: z.string().length(6, { message: 'Pincode must be 6 digits.' }),
  colleges: z.string().min(5, { message: 'Please list at least one nearby college.' }),
  images: z.any().refine(files => files?.length >= 1, "Please upload at least one image.").optional(),
});

type OwnerSignupFormValues = z.infer<typeof ownerSignupSchema>;

export default function OwnerSignUpPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<OwnerSignupFormValues>({
    resolver: zodResolver(ownerSignupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      propertyName: '',
      city: '',
      pincode: '',
      colleges: '',
    }
  });

  const handleSignUp = async (data: OwnerSignupFormValues) => {
    // This now calls the server action.
    // In a real app, you'd also handle image uploads here, likely to a cloud storage bucket.
    const result = await submitOwnerApplicationAction(data);

    if (result.success) {
      toast({
        title: "Registration Submitted!",
        description: "Thank you! Your submission is under review. You will be notified via email and SMS upon verification.",
      });
      router.push('/');
    } else {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-muted/40 my-8">
        <Card className="w-full max-w-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSignUp)}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Owner Registration</CardTitle>
                <CardDescription>
                  List your property on Nivora.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Your Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
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
                        <FormControl><Input type="email" placeholder="m@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl><Input type="password" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                <h3 className="text-lg font-semibold border-b pb-2 pt-4">Property Details</h3>
                 <FormField
                    control={form.control}
                    name="propertyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Name</FormLabel>
                        <FormControl><Input placeholder="e.g., Sunrise PG" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl><Input placeholder="e.g., Delhi" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pincode</FormLabel>
                          <FormControl><Input placeholder="e.g., 110017" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                 <FormField
                    control={form.control}
                    name="colleges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nearest Colleges</FormLabel>
                        <FormControl>
                            <Textarea placeholder="List nearby colleges, separated by commas" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel>Property Images</FormLabel>
                        <FormControl>
                           <Input
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={(e) => field.onChange(e.target.files)}
                           />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Submitting...' : 'Submit for Verification'}
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
