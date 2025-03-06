import { AppBar, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CuentaRegresiva from "./CuentaRegresiva";

// Fecha del evento (ajusta a la fecha real del baby shower)
const fechaEventoOriginal = new Date("2025-03-15T22:00:00Z");

const BarraSuperior = () => {
  const [fechaEvento, setFechaEvento] = useState<Date | null>(null);

  // Solo establecemos la fecha después de que el componente se haya montado en el cliente
  useEffect(() => {
    setFechaEvento(fechaEventoOriginal);
  }, []);

  if (!fechaEvento) return null; // Evita renderizar la barra hasta que la fecha esté disponible

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#ff80ab", // Color suave para la barra
        zIndex: 1300, // Asegura que la barra esté encima de otros elementos
        padding: "1rem",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
          Invitación a Baby Shower
        </Typography>
        <CuentaRegresiva fechaEvento={fechaEvento} />
      </Toolbar>
    </AppBar>
  );
};

export default BarraSuperior;
