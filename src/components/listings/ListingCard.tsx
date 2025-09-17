import type { Listing } from "@/lib/types";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === listing.imageId);

  return (
    <Card className="overflow-hidden flex flex-col">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline">{listing.name}</CardTitle>
          <Badge variant={listing.type === 'PG' ? 'default' : listing.type === 'Flat' ? 'secondary' : 'outline'}>
            {listing.type}
          </Badge>
        </div>
        <CardDescription>{listing.address}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Placeholder for rating or other info */}
        <p className="text-sm text-muted-foreground">Reviews available.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <MessageCircle className="mr-2 h-4 w-4" />
          View Reviews & Details
        </Button>
      </CardFooter>
    </Card>
  );
}
