"use client";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{ p: 6, mt: 4, textAlign: "center", bgcolor: "#ffe6f2" }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            🎀 ¡Bienvenido al Baby Shower! 🎀
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Estamos muy emocionados de celebrar la llegada de nuestra pequeña
            princesa. 💖
          </Typography>

          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              onClick={() => router.push("/admin")}
            >
              Administrar Invitaciones
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => alert("¡Gracias por tu visita!")}
            >
              Más Información
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
