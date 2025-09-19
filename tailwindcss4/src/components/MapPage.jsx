import React, { useEffect, useState, Fragment } from 'react';

// Sample data for cattle locations remains the same
const cattleLocations = [
    { id: 1, position: [28.6139, 77.2090], name: "Holstein", location: "Delhi" },
    { id: 2, position: [19.0760, 72.8777], name: "Gir Cow", location: "Mumbai" },
    { id: 3, position: [21.1702, 72.8311], name: "Sahiwal", location: "Surat" },
    { id: 4, position: [20.9517, 85.0985], name: "Hariana", location: "Angul, Odisha" }
];

export default function MapPage() {
  // State to hold the Leaflet components once they are loaded
  const [LeafletComponents, setLeafletComponents] = useState(null);

  useEffect(() => {
    // This effect runs once to dynamically load the map libraries at runtime
    // This avoids the build error caused by static imports from a URL.
    
    // 1. Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    link.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // 2. Load Leaflet JavaScript
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    leafletScript.integrity = 'sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==';
    leafletScript.crossOrigin = '';
    document.body.appendChild(leafletScript);

    // 3. Load React-Leaflet after Leaflet is ready
    leafletScript.onload = () => {
      const reactLeafletScript = document.createElement('script');
      reactLeafletScript.src = 'https://unpkg.com/react-leaflet@3.2.5/umd/react-leaflet.min.js';
      document.body.appendChild(reactLeafletScript);

      reactLeafletScript.onload = () => {
        // Now that the libraries are loaded, we can access them on the window object
        const L = window.L;

        // Fix for the default icon issue
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
        
        // Save the loaded components to state, which will trigger a re-render
        setLeafletComponents({
            MapContainer: window.ReactLeaflet.MapContainer,
            TileLayer: window.ReactLeaflet.TileLayer,
            Marker: window.ReactLeaflet.Marker,
            Popup: window.ReactLeaflet.Popup,
        });
      };
    };

    // Cleanup function to remove the scripts and stylesheet when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(leafletScript);
      // It's possible reactLeafletScript is not yet appended, so check first
      const rls = document.querySelector('script[src*="react-leaflet"]');
      if (rls) {
          document.body.removeChild(rls);
      }
    };
  }, []);

  // Show a loading message until the libraries are ready
  if (!LeafletComponents) {
    return (
        <div className="h-full w-full bg-[#fcf8ee] p-6 flex justify-center items-center">
            <p className="text-gray-600">Loading Map...</p>
        </div>
    );
  }

  // Destructure the components from state once they are loaded
  const { MapContainer, TileLayer, Marker, Popup } = LeafletComponents;

  return (
    <div className="h-full w-full bg-[#fcf8ee] p-6 flex flex-col">
        {/* Header */}
        <div>
            <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-teal-600 to-sky-600 text-transparent bg-clip-text">
                Cattle Location Map
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
                View the locations of recent cattle identifications.
            </p>
        </div>

        {/* Map Container */}
        <div className="flex-1 rounded-2xl shadow-lg overflow-hidden border">
            <MapContainer center={[22.9734, 78.6569]} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {cattleLocations.map(cattle => (
                    <Marker key={cattle.id} position={cattle.position}>
                        <Popup>
                            <b>{cattle.name}</b> found in {cattle.location}.
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    </div>
  );
}

