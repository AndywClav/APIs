import obtenerDatos from './obtenerDatos.js';

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