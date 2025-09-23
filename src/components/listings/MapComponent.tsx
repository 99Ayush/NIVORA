'use client';

import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';
import { memo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { LatLngBounds } from 'leaflet';

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

// A helper component to update the map's view when locations change
function MapUpdater({ locations }: { locations: Location[] }) {
    const map = useMap();
    useEffect(() => {
        if (locations.length > 0) {
            if (locations.length > 1) {
                const bounds = new L.LatLngBounds(locations.map(loc => [loc.lat, loc.lng]));
                map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 16 });
            } else {
                map.flyTo([locations[0].lat, locations[0].lng], 15);
            }
        } else {
             // If no locations, reset to default view
            map.flyTo([28.6139, 77.2090], 11);
        }
    }, [locations, map]);
    return null;
}


function MapComponent({ locations = [] }: MapComponentProps) {
  const defaultCenter: [number, number] = [28.6139, 77.2090]; // Delhi
  
  return (
    <MapContainer 
        center={defaultCenter} 
        zoom={11} 
        scrollWheelZoom={false} 
        className="w-full h-full rounded-md z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]}>
          {loc.name && <Popup>{loc.name}</Popup>}
        </Marker>
      ))}

      <MapUpdater locations={locations} />
    </MapContainer>
  );
}

export default memo(MapComponent);
