type Invitacion = {
  id: string; // 📌 Ahora `id` es un UUID
  nombre: string;
  hora: string;
};

// 📌 Obtener todas las invitaciones desde el backend
export const obtenerTodasInvitaciones = async (): Promise<Invitacion[]> => {
  const respuesta = await fetch(
    "https://baby-shower-backend-71fc047a7060.herokuapp.com/api/invitaciones"
  );
  if (!respuesta.ok) throw new Error("Error al obtener las invitaciones");
  return await respuesta.json();
};

// 📌 Agregar una invitación al backend
export const agregarInvitacion = async (
  nombre: string,
  hora: string
): Promise<string> => {
  const respuesta = await fetch(
    "https://baby-shower-backend-71fc047a7060.herokuapp.com/api/invitaciones",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, hora }),
    }
  );

  if (!respuesta.ok) throw new Error("Error al agregar la invitación");

  const data = await respuesta.json();
  return data.id; // 📌 Ahora devuelve un UUID
};

// 📌 Obtener una invitación por ID desde el backend
export const obtenerInvitacion = async (
  id: string
): Promise<Invitacion | null> => {
  const respuesta = await fetch(
    `https://baby-shower-backend-71fc047a7060.herokuapp.com/api/invitaciones/${id}`
  );
  if (!respuesta.ok) return null;
  return await respuesta.json();
};

// 📌 Eliminar una invitación en el backend
export const eliminarInvitacion = async (id: string): Promise<void> => {
  const respuesta = await fetch(
    `https://baby-shower-backend-71fc047a7060.herokuapp.com/api/invitaciones/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!respuesta.ok) throw new Error("Error al eliminar la invitación");
};
