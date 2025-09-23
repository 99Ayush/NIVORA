"use client";

import { useMemo } from 'react';
import type { Listing } from '@/lib/types';
import ListingMap from './ListingMap';

interface ListingDetailMapProps {
    listing: Listing;
}

export default function ListingDetailMap({ listing }: ListingDetailMapProps) {
    const mapLocations = useMemo(() => {
        return listing.location ? [{ ...listing.location, name: listing.name }] : []
    }, [listing.location, listing.name]);

    return <ListingMap locations={mapLocations} />;
}
