"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';

const reviewSchema = z.object({
  rating: z.number().min(1, "Please select a rating.").max(5),
  comment: z.string().min(10, "Review must be at least 10 characters long.").max(500, "Review cannot exceed 500 characters."),
});

// Mock function to check if a user is a verified resident.
// In a real application, this would involve a backend check.
const checkVerifiedResident = async (user: User | null): Promise<boolean> => {
    return new Promise(resolve => {
        setTimeout(() => {
            // For now, we'll assume no user is verified yet.
            // This can be changed to 'true' for testing the form.
            resolve(false); 
        }, 500);
    });
};

export default function ReviewForm() {
  const [user, setUser] = useState<User | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const verified = await checkVerifiedResident(currentUser);
        setIsVerified(verified);
      } else {
        setIsVerified(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      comment: '',
    },
  });

  function onSubmit(values: z.infer<typeof reviewSchema>) {
    console.log(values);
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback. It will be reviewed shortly.",
    });
    form.reset();
  }

  if (loading) {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full mt-2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-10 w-32" />
            </CardContent>
        </Card>
    );
  }

  if (!user) {
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Want to share your experience?</CardTitle>
          <CardDescription>You need to be logged in to write a review.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/login">Login to Review</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!isVerified) {
    return (
        <Card className="text-center">
            <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                    Verified Reviews Only
                </CardTitle>
                <CardDescription>To ensure the authenticity of reviews, only verified residents and ex-residents can submit feedback. This helps maintain a trustworthy community.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">If you have stayed here, contact support to get verified.</p>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Write your review</CardTitle>
        <CardDescription>Share your experience with the community.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Rating</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={cn(
                            "h-8 w-8 cursor-pointer transition-colors",
                            field.value >= star
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted-foreground hover:text-yellow-300"
                          )}
                          onClick={() => field.onChange(star)}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your stay..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Review</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
