"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BarraSuperior from "@/components/BarraSuperior";
import Portada from "@/components/Portada";
import Invitacion from "@/components/Invitacion";
import DetallesEvento from "@/components/DetallesEvento";
import { Container, Paper, Typography, Button, Box } from "@mui/material";
import { obtenerInvitacion } from "@/app/services/invitaciones";

export default function InvitacionPage() {
  const { id } = useParams();
  const [invitado, setInvitado] = useState<{
    nombre: string;
    hora: string;
  } | null>(null);
  const [isClient, setIsClient] = useState(false); // ✅ Verifica si estamos en el cliente

  const posicionEvento: [number, number] = [-17.980683, -67.132194];

  useEffect(() => {
    setIsClient(true); // ✅ Marcar que estamos en el cliente

    const fetchInvitacion = async () => {
      if (id) {
        try {
          const data = await obtenerInvitacion(id as string);
          setInvitado(data);
        } catch (error) {
          console.error("Error al obtener la invitación:", error);
        }
      }
    };

    fetchInvitacion();
  }, [id]);

  if (!isClient) {
    return null; // ✅ No renderizar nada en el servidor
  }

  if (!invitado) {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 6, textAlign: "center" }}>
          <Typography variant="h5" color="error">
            Invitación no encontrada
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} href="/">
            Volver al inicio
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffe6f2",
        pt: 8,
      }}
    >
      <BarraSuperior />
      <Portada />
      <Invitacion invitado={{ nombre: invitado.nombre }} />
      <DetallesEvento posicionEvento={posicionEvento} hora={invitado.hora} />
    </Box>
  );
}
