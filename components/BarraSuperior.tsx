import { AppBar, Toolbar, Typography } from "@mui/material";
import CuentaRegresiva from "./CuentaRegresiva";

// Fecha del evento (ajusta a la fecha real del baby shower)
const fechaEvento = new Date("2025-03-15T18:00:00Z");

const BarraSuperior = () => (
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

export default BarraSuperior;
