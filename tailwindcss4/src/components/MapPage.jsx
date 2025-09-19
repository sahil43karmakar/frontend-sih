import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// custom marker icon (leaflet needs this for proper marker image)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapPage() {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[22.9734, 78.6569]} // India ka center
        zoom={5}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[28.7041, 77.1025]}>
          <Popup>Cattle found in Delhi</Popup>
        </Marker>
        <Marker position={[19.076, 72.8777]}>
          <Popup>Buffalo found in Mumbai</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

