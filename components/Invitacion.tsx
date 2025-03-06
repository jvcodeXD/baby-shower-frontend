import { Paper, Typography, Box } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Dancing_Script } from "next/font/google";

// ✅ Importamos correctamente Dancing Script
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Invitacion = ({ invitado }: { invitado: { nombre: string } }) => (
  <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
    <Paper
      elevation={3}
      sx={{
        p: 6,
        textAlign: "center",
        maxWidth: "1000px",
        width: "100%",
        bgcolor: "#f9f9f9",
        borderRadius: "16px",
      }}
    >
      {/* Icono de celebración */}
      <CelebrationIcon sx={{ fontSize: 60, color: "#ff4081", mb: 2 }} />

      {/* Título de la invitación */}
      <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
        {invitado.nombre}!
      </Typography>
      <Typography variant="h4" color="primary">
        ¡Estás invitado! 🎀
      </Typography>

      {/* Mensaje de los padres */}
      <Typography variant="h5" color="textSecondary" paragraph>
        Con mucho amor, te invitamos a acompañarnos en el Baby Shower de nuestro
        bebé. Somos:
      </Typography>

      {/* Nombres con Dancing Script */}
      <Typography
        variant="h4"
        color="textSecondary"
        paragraph
        sx={{ fontStyle: "italic" }}
      >
        Juan Visney Quispe Martinez
      </Typography>

      <Typography variant="h6" color="textSecondary" paragraph>
        e
      </Typography>

      <Typography
        variant="h4"
        color="textSecondary"
        paragraph
        sx={{ fontStyle: "italic" }}
      >
        Isabel Choque Gutierrez
      </Typography>

      <Typography variant="h5" color="textSecondary" paragraph>
        Los orgullosos padres, y nos encantaría compartir este día tan especial
        contigo.
      </Typography>
    </Paper>
  </Box>
);

export default Invitacion;
