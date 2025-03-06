"use client";
import { useEffect, useState } from "react";
import {
  agregarInvitacion,
  obtenerTodasInvitaciones,
  eliminarInvitacion,
} from "@/lib/data"; // Cambiado para usar el backend
import {
  Container,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function AdminPage() {
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [invitaciones, setInvitaciones] = useState<
    { id: string; nombre: string; hora: string }[]
  >([]);

  // Cargar invitaciones desde el backend
  useEffect(() => {
    const fetchInvitaciones = async () => {
      try {
        const data = await obtenerTodasInvitaciones(); // ✅ Llamada al backend
        setInvitaciones(data);
      } catch (error) {
        console.error("Error al obtener invitaciones:", error);
      }
    };

    fetchInvitaciones();
  }, []);

  // Generar nueva invitación
  const generarInvitacion = async () => {
    if (!nombre || !hora) return alert("Por favor, completa todos los campos");

    try {
      const id = await agregarInvitacion(nombre, hora); // ✅ Ahora es asíncrona
      const data = await obtenerTodasInvitaciones();
      setInvitaciones(data);
      alert(`Invitación generada: /invitacion/${id}`);
      setNombre("");
      setHora("");
    } catch (error) {
      console.error("Error al agregar invitación:", error);
    }
  };

  // Eliminar invitación
  const borrarInvitacion = async (id: string) => {
    try {
      await eliminarInvitacion(id); // ✅ Ahora es asíncrona
      const data = await obtenerTodasInvitaciones();
      setInvitaciones(data);
    } catch (error) {
      console.error("Error al eliminar invitación:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Administrar Invitaciones
        </Typography>

        {/* Formulario */}
        <Box display="flex" flexDirection="column" gap={2} mb={4}>
          <TextField
            label="Nombre del Invitado"
            variant="outlined"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
          />
          <TextField
            label="Hora de Llegada"
            type="time"
            variant="outlined"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={generarInvitacion}
            fullWidth
          >
            Generar Invitación
          </Button>
        </Box>

        {/* Lista de Invitaciones */}
        <Typography variant="h6">Invitaciones Generadas:</Typography>
        {invitaciones.length === 0 ? (
          <Typography>No hay invitaciones aún.</Typography>
        ) : (
          <List>
            {invitaciones.map((inv) => (
              <ListItem
                key={inv.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => borrarInvitacion(inv.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={`${inv.nombre} - ${inv.hora}`}
                  secondary={
                    <a
                      href={`/invitacion/${inv.id}`}
                      style={{ color: "#1976d2" }}
                    >
                      Ver invitación
                    </a>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}
