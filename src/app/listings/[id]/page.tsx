import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { listings } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle, Phone, User } from 'lucide-react';
import ReviewForm from '@/components/listings/ReviewForm';

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

// A helper function to parse facility details from the first review comment
function parseFacilities(comment: string): { facilities: string[], rentComment: string } {
    const parts = comment.split('. Rent');
    const facilitiesText = parts[0];
    const rentComment = parts.length > 1 ? `Rent${parts[1]}` : '';

    const facilities = facilitiesText.split(',').map(item => item.trim()).filter(Boolean);

    return { facilities, rentComment };
}


export default function ListingDetailPage({ params }: ListingDetailPageProps) {
  const listing = listings.find((l) => l.id === params.id);

  if (!listing) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === listing.imageId);
  const { facilities, rentComment } = parseFacilities(listing.reviews[0].comment);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Image Section */}
          {image && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}

          {/* Title and Info */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-4xl font-bold font-headline">{listing.name}</h1>
              <Badge variant={badgeVariantMap[listing.type] || 'default'} className="text-lg px-4 py-1">
                {listing.type}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground">{listing.address}</p>
          </div>

          {/* Facilities Section */}
          <Card className="mb-8">
              <CardHeader>
                  <CardTitle>Details & Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {facilities.map((facility, index) => (
                          <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <span>{facility}</span>
                          </li>
                      ))}
                  </ul>
                  {rentComment && <p className="text-muted-foreground italic mt-4">{rentComment}</p>}
              </CardContent>
          </Card>

          {/* Contact Owner Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Contact Owner</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-2">
                  <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <p className="text-lg font-medium">{listing.contact.name}</p>
                  </div>
                   <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <a href={`tel:${listing.contact.phone}`} className="text-lg text-accent hover:underline">{listing.contact.phone}</a>
                  </div>
              </div>
              <a href={`tel:${listing.contact.phone}`}>
                <Button>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </CardContent>
          </Card>


          {/* Review Form Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-headline mb-6">Leave a Review</h2>
            <ReviewForm />
          </div>

          {/* Existing Reviews Section */}
          <div>
            <h2 className="text-3xl font-bold font-headline mb-6">Verified Reviews</h2>
            <div className="space-y-6">
              {listing.reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
