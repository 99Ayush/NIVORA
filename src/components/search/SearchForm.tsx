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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listings } from "@/lib/data";
import { useMemo, useState } from "react";

// Helper to get unique cities and their colleges from listings data
const getSearchOptions = () => {
  const cityCollegeMap = new Map<string, { pincode: string; colleges: Set<string> }>();

  // A simplified mapping from pincode prefixes to city names for this dataset
  const pincodeToCity: { [key: string]: string } = {
    '110': 'Delhi',
    '201': 'Noida',
  };

  listings.forEach(listing => {
    const cityPrefix = listing.pincode.substring(0, 3);
    const city = pincodeToCity[cityPrefix] || 'Other';

    if (!cityCollegeMap.has(city)) {
      cityCollegeMap.set(city, { pincode: listing.pincode, colleges: new Set() });
    }
    cityCollegeMap.get(city)!.colleges.add(listing.college);
  });

  const cities = Array.from(cityCollegeMap.keys());
  const collegesByCity = Array.from(cityCollegeMap.entries()).reduce((acc, [city, {colleges}]) => {
    acc[city] = Array.from(colleges);
    return acc;
  }, {} as Record<string, string[]>);
  
  // A helper map to get pincode from college name
  const collegeToPincodeMap = listings.reduce((acc, listing) => {
    if (!acc[listing.college]) {
      acc[listing.college] = listing.pincode;
    }
    return acc;
  }, {} as Record<string, string>);

  return { cities, collegesByCity, collegeToPincodeMap };
};


const formSchema = z.object({
  city: z.string().min(1, { message: "Please select a city." }),
  collegeName: z.string().min(1, { message: "Please select a college." }),
});

export default function SearchForm() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState('');
  const { cities, collegesByCity, collegeToPincodeMap } = useMemo(() => getSearchOptions(), []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      collegeName: "",
    },
  });
  
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    form.setValue('city', city);
    form.setValue('collegeName', ''); // Reset college when city changes
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const pincode = collegeToPincodeMap[values.collegeName];
    if (!pincode) {
        form.setError('collegeName', { type: 'manual', message: 'Could not find pincode for this college.' });
        return;
    }
    const params = new URLSearchParams({
      college: values.collegeName,
      pincode: pincode,
    });
    router.push(`/listings?${params.toString()}`);
  }

  return (
    <Card className="w-full max-w-sm mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-headline">Find Your Perfect Stay</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                   <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Select onValueChange={handleCityChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map(city => (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="collegeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College Name</FormLabel>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Select
                      key={selectedCity}
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={!selectedCity}
                    >
                      <FormControl>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select a college" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectedCity && collegesByCity[selectedCity]?.map(college => (
                            <SelectItem key={college} value={college}>{college}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={!form.watch('collegeName')}>
              <Search className="mr-2 h-5 w-5" />
              Search Accommodations
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
