import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

interface CuentaRegresivaProps {
  fechaEvento: Date;
}

const CuentaRegresiva: React.FC<CuentaRegresivaProps> = ({ fechaEvento }) => {
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true); // Marcar que estamos en el cliente

    const interval = setInterval(() => {
      const ahora = new Date();
      const diferencia = fechaEvento.getTime() - ahora.getTime();

      if (diferencia <= 0) {
        clearInterval(interval);
        setTiempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      } else {
        setTiempoRestante({
          dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
          horas: Math.floor(
            (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((diferencia % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [fechaEvento]);

  if (!clientSide) return null; // Evita problemas de hidratación SSR

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          color: "#fff",
          fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" }, // Ajuste para móviles
        }}
      >
        ⏳ ¡Faltan solo!
      </Typography>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          color: "#ffffff",
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Reduce tamaño en móviles
        }}
      >
        {tiempoRestante.dias} Días, {tiempoRestante.horas} Horas,{" "}
        {tiempoRestante.minutos} Minutos, {tiempoRestante.segundos} Segundos
      </Typography>
    </Box>
  );
};

export default CuentaRegresiva;
