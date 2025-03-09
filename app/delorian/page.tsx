"use client";
import { useEffect, useState } from "react";
import {
  agregarInvitacion,
  obtenerTodasInvitaciones,
  eliminarInvitacion,
} from "../services/invitaciones";
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
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AdminPage() {
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [invitaciones, setInvitaciones] = useState<
    { id: string; nombre: string; hora: string }[]
  >([]); // Inicializamos como un array vacío

  const [copiado, setCopiado] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvitaciones = async () => {
      try {
        const data = await obtenerTodasInvitaciones();
        console.log(data);
        setInvitaciones(data);
      } catch (error) {
        console.error("Error al obtener invitaciones:", error);
      }
    };

    fetchInvitaciones();
  }, []);

  const generarInvitacion = async () => {
    if (!nombre || !hora) return alert("Por favor, completa todos los campos");

    try {
      const id = await agregarInvitacion(nombre, hora);
      const data = await obtenerTodasInvitaciones();
      setInvitaciones(data);
      alert(`Invitación generada: ${BASE_URL}/invitacion/${id}`);
      setNombre("");
      setHora("");
    } catch (error) {
      console.error("Error al agregar invitación:", error);
    }
  };

  const borrarInvitacion = async (id: string) => {
    try {
      await eliminarInvitacion(id);
      const data = await obtenerTodasInvitaciones();
      setInvitaciones(data);
    } catch (error) {
      console.error("Error al eliminar invitación:", error);
    }
  };

  const copiarLink = async (id: string) => {
    const link = `${BASE_URL}/invitacion/${id}`;

    if (!navigator.clipboard) {
      alert("La función de copiar no está soportada en este navegador.");
      return;
    }

    try {
      await navigator.clipboard.writeText(link);
      setCopiado(id);
      setTimeout(() => setCopiado(null), 2000);
    } catch (error) {
      console.error("Error al copiar el enlace:", error);
      alert("No se pudo copiar el enlace. Por favor, copia manualmente.");
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

        {/* Mensaje de copia de enlace */}
        {copiado && (
          <Typography variant="body2" color="primary" align="center" mb={2}>
            ¡Enlace copiado exitosamente!
          </Typography>
        )}

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
                  <>
                    <Tooltip title="Copiar enlace">
                      <IconButton
                        onClick={() => copiarLink(inv.id)}
                        color="primary"
                      >
                        <ContentCopyIcon />
                      </IconButton>
                    </Tooltip>
                    <IconButton
                      edge="end"
                      onClick={() => borrarInvitacion(inv.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText
                  primary={`${inv.nombre} - ${inv.hora}`}
                  secondary={
                    <a
                      href={`${BASE_URL}/invitacion/${inv.id}`}
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
