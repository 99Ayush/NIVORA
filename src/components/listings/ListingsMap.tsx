import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function ListingsMap() {
  const mapImage = PlaceHolderImages.find((img) => img.id === "map");

  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-0 h-full">
        {mapImage ? (
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              fill
              className="object-cover"
              data-ai-hint={mapImage.imageHint}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Map not available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
