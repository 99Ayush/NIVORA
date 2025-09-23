'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { memo, useEffect, useRef } from 'react';
import type { Map } from 'leaflet';

// This is to fix the default icon issue with react-leaflet
const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

interface Location {
  lat: number;
  lng: number;
  name?: string;
}

interface MapComponentProps {
  locations?: Location[];
}

function MapComponent({ locations = [] }: MapComponentProps) {
  const mapRef = useRef<Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const defaultCenter: [number, number] = [28.6139, 77.2090]; // Delhi
  const defaultZoom = 11;

  useEffect(() => {
    if (containerRef.current && !mapRef.current) {
        mapRef.current = L.map(containerRef.current, {
            center: defaultCenter,
            zoom: defaultZoom,
            scrollWheelZoom: false,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current);
    }
  }, []); // Only run once on mount to initialize the map

  useEffect(() => {
    if (mapRef.current) {
      // Clear existing markers
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current!.removeLayer(layer);
        }
      });

      // Add new markers
      locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(mapRef.current!);
        if (loc.name) {
          marker.bindPopup(loc.name);
        }
      });

      // Update map view
      if (locations.length > 0) {
        if (locations.length > 1) {
            const bounds = new L.LatLngBounds(locations.map(loc => [loc.lat, loc.lng]));
            mapRef.current.flyToBounds(bounds, { padding: [50, 50] });
        } else {
            mapRef.current.flyTo([locations[0].lat, locations[0].lng], 15);
        }
      } else if (!locations || locations.length === 0) {
         mapRef.current.flyTo(defaultCenter, defaultZoom);
      }
    }
  }, [locations]); // Rerun effect if locations change

  return (
    <div 
        ref={containerRef} 
        className="w-full h-full rounded-md z-0"
    />
  );
}

export default memo(MapComponent);
