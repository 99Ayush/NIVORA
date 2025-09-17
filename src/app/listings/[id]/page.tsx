import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { listings } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface ListingDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ListingDetailPageProps): Promise<Metadata> {
  const listing = listings.find((l) => l.id === params.id);
  if (!listing) {
    return {
      title: 'Listing Not Found - Nivora',
    };
  }
  return {
    title: `${listing.name} - Nivora`,
    description: `Details for ${listing.name}, a ${listing.type} near ${listing.college}.`,
  };
}

const badgeVariantMap: { [key in 'PG' | 'Flat' | 'Mess' | 'Hostel']: 'default' | 'secondary' | 'outline' | 'destructive' } = {
  PG: 'default',
  Flat: 'secondary',
  Mess: 'outline',
  Hostel: 'destructive',
};

export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  const listing = listings.find((l) => l.id === params.id);

  if (!listing) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === listing.imageId);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {image && (
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-4xl font-bold font-headline">{listing.name}</h1>
              <Badge variant={badgeVariantMap[listing.type] || 'default'} className="text-lg px-4 py-1">
                {listing.type}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-6">{listing.address}</p>
            
            <Card>
                <CardHeader>
                    <CardTitle>Details & Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{listing.reviews[0].comment}</p>
                </CardContent>
            </Card>

          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold font-headline mb-6">Reviews</h2>
          <div className="space-y-6">
            {listing.reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-xl">{review.author}</CardTitle>
                    <div className="flex items-center gap-1">
                       {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-muted-foreground" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
