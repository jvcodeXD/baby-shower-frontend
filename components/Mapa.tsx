import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Cargar Leaflet dinámicamente
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface MapaProps {
  posicionEvento: [number, number];
}

const Mapa: React.FC<MapaProps> = ({ posicionEvento }) => {
  return (
    <Box
      mt={2}
      sx={{
        height: "300px",
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={posicionEvento}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={posicionEvento}>
          <Popup>Av. Dehene y América - Baby Shower</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Mapa;
