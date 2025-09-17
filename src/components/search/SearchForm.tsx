"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { GraduationCap, MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  collegeName: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  pincode: z.string().regex(/^\d{6}$/, {
    message: "Pincode must be 6 digits.",
  }),
});

export default function SearchForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      collegeName: "",
      pincode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const params = new URLSearchParams({
      college: values.collegeName,
      pincode: values.pincode,
    });
    router.push(`/listings?${params.toString()}`);
  }

  return (
    <Card className="w-full max-w-xs mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-headline">Find Your Perfect Stay</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="collegeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College Name</FormLabel>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <FormControl>
                      <Input placeholder="e.g., ABC University" {...field} className="pl-10" />
                    </FormControl>
                  </div>
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
                   <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <FormControl>
                      <Input placeholder="e.g., 110001" {...field} className="pl-10" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              <Search className="mr-2 h-5 w-5" />
              Search Accommodations
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
