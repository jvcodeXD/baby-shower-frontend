import { Box, Typography } from "@mui/material";

const Portada = () => (
  <Box
    sx={{
      display: "flex", // Usamos flexbox para la disposición
      alignItems: "center", // Centrar verticalmente
      justifyContent: "space-between", // Separar el texto y la imagen
      height: "100vh", // Ocupa toda la altura de la pantalla
      backgroundImage: "url('/portada.png')", // Reemplaza con la ruta de tu imagen
      backgroundSize: "cover", // Asegura que la imagen cubra todo el espacio
      backgroundPosition: "center", // Centrar la imagen
      padding: "0 2rem", // Espaciado a los lados
    }}
  ></Box>
);

export default Portada;
