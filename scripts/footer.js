async function obtenerDatos() {
    try {
        const response = await fetch("scripts/pestanias.json");

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

async function footer() {
    try {
        const pestanias = await obtenerDatos();

        const footer = document.querySelector('.APIs-footer');
        
        footer.innerHTML = `
        <nav class="navbar container">
            <div class="container">
                <a class="navbar-brand" href="#">
                    ${pestanias.Img} ${pestanias.Titulo}
                </a>
            </div>
            <div class="container APIs-footer-nav-div">
                <p class="APIs-footer-nav-div-text">&copy; 2023 || Todos los derechos reservados.</p>
            </div>
        </nav>
        `;
    if (!pestanias) {
            console.error('Error: datos de pestanias no disponibles');
            return;
        }
    } catch (error) {
        console.error(`Error al obtener los datos: ${error.message}`);
    }
}

export default footer;