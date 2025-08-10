'use client'
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const start = {
  lat: 5.5636, // Kaneshie, Accra
  lng: -0.2349,
};

const destination = {
  lat: 5.5846, // Awoshie, Accra
  lng: -0.2832,
};

const TestMap = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [path, setPath] = useState<google.maps.LatLngLiteral[]>([]);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onScriptLoad = () => {
    setIsApiLoaded(true);
  };

  useEffect(() => {
    if (!window.google || !map || !isApiLoaded) return;

    // Initialize Directions Service
    const directionsService = new window.google.maps.DirectionsService();

    // Request driving route
    directionsService.route(
      {
        origin: start,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          const route = result.routes[0].overview_path;
          const pathCoordinates = route.map((point) => ({
            lat: point.lat(),
            lng: point.lng(),
          }));
          setPath(pathCoordinates);

          // Adjust map bounds to show both markers and path
          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend(start);
          bounds.extend(destination);
          map.fitBounds(bounds);
        } else {
          console.error('Directions request failed:', status);
        }
      }
    );
  }, [map, isApiLoaded]);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('Google Maps API key is not defined. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local');
  }

  // Define marker icons only after API is loaded
  const startMarkerIcon: google.maps.Icon | undefined = isApiLoaded
    ? {
        url: '/images/tdx-marker.png', // Path to PNG in /public/images
        scaledSize: new window.google.maps.Size(35, 35),
      }
    : undefined;

  const destinationMarkerIcon: google.maps.Icon | undefined = isApiLoaded
    ? {
        url: '/images/destination.png', // Path to PNG in /public/images
        scaledSize: new window.google.maps.Size(35, 35),
      }
    : undefined;

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={['geometry']} onLoad={onScriptLoad}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={start}
        zoom={15}
        onLoad={onLoad}
      >
        {isApiLoaded && startMarkerIcon && (
          <Marker
            position={start}
            title="Kaneshie, Accra"
            icon={startMarkerIcon}
          />
        )}
        {isApiLoaded && (
          <Marker position={destination} title="Awoshie, Accra" />
        )}
        {isApiLoaded && path.length > 0 && (
          <Polyline
            path={path}
            options={{
              strokeColor: '#10d053',
              strokeOpacity: 0.8,
              strokeWeight: 4,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default TestMap;