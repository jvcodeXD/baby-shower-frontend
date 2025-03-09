import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api/invitacion";

// 📌 Obtener todas las invitaciones desde el backend
export const obtenerTodasInvitaciones = async () => {
  try {
    const respuesta = await axios.get(BASE_URL);
    return respuesta.data;
  } catch (error) {
    console.log("Error al obtener las invitaciones");
  }
};

// 📌 Agregar una invitación al backend
export const agregarInvitacion = async (nombre: string, hora: string) => {
  try {
    const respuesta = await axios.post(BASE_URL, { nombre, hora });
    return respuesta.data.id; // 📌 Ahora devuelve un UUID
  } catch (error) {
    console.log("Error al agregar la invitación");
  }
};

// 📌 Obtener una invitación por ID desde el backend
export const obtenerInvitacion = async (id: string) => {
  try {
    const respuesta = await axios.get(`${BASE_URL}/${id}`);
    return respuesta.data;
  } catch (error) {
    return null;
  }
};

// 📌 Eliminar una invitación en el backend
export const eliminarInvitacion = async (id: string) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.log("Error al eliminar la invitación");
  }
};
