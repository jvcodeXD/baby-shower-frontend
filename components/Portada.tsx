import { Box } from "@mui/material";

const Portada = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "0 2rem",
      backgroundImage: {
        xs: "url('/portada1.png')", // Imagen para celulares
        sm: "url('/portada.png')", // Imagen para tablets y pantallas más grandes
      },
    }}
  ></Box>
);

export default Portada;
