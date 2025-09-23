import { Suspense, useMemo } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ListingCard from '@/components/listings/ListingCard';
import { listings } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import ListingMap from '@/components/listings/ListingMap';


export const metadata: Metadata = {
  title: 'Listings - Nivora',
  description: 'Find accommodations near your college.',
};

interface ListingsPageProps {
  searchParams: {
    college?: string;
    pincode?: string;
  };
}

function ListingsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[192px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}


export default function ListingsPage({ searchParams }: ListingsPageProps) {
  const collegeName = searchParams.college || 'your college';
  const pincode = searchParams.pincode || 'your area';

  const filteredListings = useMemo(() => listings.filter((listing) => {
    const collegeQuery = searchParams.college?.toLowerCase();
    const pincodeQuery = searchParams.pincode;

    if (!collegeQuery || !pincodeQuery) return false;

    const listingCollege = listing.college.toLowerCase();

    return listingCollege.includes(collegeQuery) && listing.pincode === pincodeQuery;
  }), [searchParams.college, searchParams.pincode]);

  const mapLocations = useMemo(() => filteredListings
    .filter(l => l.location)
    .map(l => ({...l.location, name: l.name})), [filteredListings]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-headline">
            Stays near {collegeName}
          </h1>
          <p className="text-muted-foreground">Showing results for pincode: {pincode}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold font-headline mb-4">
              Available Listings
            </h2>
            
            <Suspense fallback={<ListingsSkeleton />}>
              {filteredListings.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <h3 className="text-xl font-semibold">No Listings Found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your search criteria.</p>
                </div>
              )}
            </Suspense>

          </div>
          <div className="hidden lg:block lg:col-span-1 relative">
             <div className="sticky top-24 h-[60vh]">
               <ListingMap locations={mapLocations} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
