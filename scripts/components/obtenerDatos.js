async function obtenerDatos() {
    try {
        const response = await fetch("/pestanias.json");

        if (!response.ok) {
            throw new Error(`Error al realizar la solicitud. Código de estado: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error al obtener los datos: ${error.message}`);
        throw error; // Re-lanza el error para que pueda ser manejado más arriba si es necesario
    }
}

export default obtenerDatos;