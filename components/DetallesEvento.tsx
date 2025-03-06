import { Box, Typography, Button, Paper } from "@mui/material";
import Mapa from "./Mapa";

interface DetallesEventoProps {
  posicionEvento: [number, number];
  hora: string;
}

const DetallesEvento: React.FC<DetallesEventoProps> = ({
  posicionEvento,
  hora,
}) => (
  <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
    <Paper
      elevation={3}
      sx={{
        p: 6,
        textAlign: "center",
        maxWidth: "1000px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        bgcolor: "#ffffff", // Fondo blanco como la tarjeta de invitación
        borderRadius: "8px", // Bordes redondeados
      }}
    >
      {/* Título de Detalles del Evento */}
      <Typography variant="h4" fontWeight="bold" color="primary" sx={{ mb: 3 }}>
        Detalles del Evento
      </Typography>

      {/* Contenedor con 2 columnas usando flexbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Apilar en móvil y colocar en fila en pantallas grandes
          justifyContent: "space-between", // Espaciado entre las columnas
          gap: 3, // Espaciado entre las columnas
        }}
      >
        {/* Columna para los detalles del evento */}
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            display: "flex", // Usar flexbox para distribuir el contenido
            flexDirection: "column", // Asegurarnos que el contenido se alinee de arriba a abajo
            justifyContent: "center", // Centrar el contenido verticalmente
            gap: 1, // Espaciado entre las líneas
            p: 2, // Padding para dar espacio dentro de la columna
          }}
        >
          {/* Fecha destacada */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              backgroundColor: "#ff4081", // Fondo destacado
              color: "#fff", // Texto blanco
              padding: "8px 16px",
              borderRadius: "8px",
              display: "inline-block",
              fontSize: "1.5rem", // Tamaño de texto más grande
              marginBottom: 2,
            }}
          >
            📅 Fecha: <span style={{ color: "#fff" }}>15 de marzo</span>
          </Typography>

          {/* Hora destacada */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              backgroundColor: "#ff4081", // Fondo destacado
              color: "#fff", // Texto blanco
              padding: "8px 16px",
              borderRadius: "8px",
              display: "inline-block",
              fontSize: "1.5rem", // Tamaño de texto más grande
              marginBottom: 2,
            }}
          >
            ⏰ Hora de llegada: <span style={{ color: "#fff" }}>{hora}</span>
          </Typography>

          {/* Lugar destacado */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              backgroundColor: "#ff4081", // Fondo destacado
              color: "#fff", // Texto blanco
              padding: "8px 16px",
              borderRadius: "8px",
              display: "inline-block",
              fontSize: "1.5rem", // Tamaño de texto más grande
              marginBottom: 2,
            }}
          >
            📍 Lugar:{" "}
            <span style={{ color: "#fff" }}>Av. Dehene y América</span>
          </Typography>
        </Box>

        {/* Columna para el mapa */}
        <Box sx={{ flex: 1 }}>
          <Mapa posicionEvento={posicionEvento} />
        </Box>
      </Box>

      {/* Botón para ver en Google Maps */}
      <Button
        variant="contained"
        color="secondary"
        href={`https://www.google.com/maps/search/?api=1&query=${posicionEvento[0]},${posicionEvento[1]}`}
        target="_blank"
        sx={{ mt: 2 }}
      >
        Ver en Google Maps
      </Button>
    </Paper>
  </Box>
);

export default DetallesEvento;
