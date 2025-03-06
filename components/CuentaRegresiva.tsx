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

  // Solo ejecutamos la cuenta regresiva en el cliente
  useEffect(() => {
    setClientSide(true); // Indicar que el componente se ha montado en el cliente

    const interval = setInterval(() => {
      const ahora = new Date();
      const diferencia = fechaEvento.getTime() - ahora.getTime();

      if (diferencia <= 0) {
        clearInterval(interval);
        setTiempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      } else {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor(
          (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutos = Math.floor(
          (diferencia % (1000 * 60 * 60)) / (1000 * 60)
        );
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        setTiempoRestante({ dias, horas, minutos, segundos });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [fechaEvento]);

  if (!clientSide) {
    return null; // Evitar que se muestre algo antes de que el componente se monte en el cliente
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
        ⏳ ¡Faltan solo!
      </Typography>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          color: "#ffffff",
          fontSize: "1.5rem",
        }}
      >
        {tiempoRestante.dias} Días, {tiempoRestante.horas} Horas,{" "}
        {tiempoRestante.minutos} Minutos, {tiempoRestante.segundos} Segundos
      </Typography>
    </Box>
  );
};

export default CuentaRegresiva;
