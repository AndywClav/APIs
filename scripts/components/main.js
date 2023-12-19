import obtenerDatos from './obtenerDatos.js';
import carrousel from './carrusel.js';

async function main() {
    try {
        const pestanias = await obtenerDatos();
        const main = document.querySelector('.Apis-main');

        main.innerHTML += `
        <div class="APIs-main-div">
            <h1 class="Apis-h1">PROYECTOS</h1>
        </div>
        <div class="APIs-main-div">
            <div class="APIs-main-div-container"></div>
            <button class="APIs-main-div-button">
                <box-icon type='solid' name='chevron-left' id="botonIz"></box-icon>
            </button>
            <button class="APIs-main-div-button">
                <box-icon type='solid' name='chevron-right' id="botonDe"></box-icon>            
            </button>
        </div>
        `;

        const APIs_main_div = document.querySelector('.APIs-main-div-container');
        const botonIzquierda = document.querySelector('#botonIz');
        const botonDerecha = document.querySelector('#botonDe');

        if (APIs_main_div) {
            for (let i = 0; i < pestanias.Main.Contenido.length; i++) {
                APIs_main_div.innerHTML += `
                    <div class="card APIs-card">
                        <img src="${pestanias.Main.Contenido[i].Img}" class="card-img-top" alt="...">
                        <div class="card-body APIs-card-body">
                            <h5 class="card-title">${pestanias.Main.Contenido[i].Titulo}</h5>
                            <p class="card-text">${pestanias.Main.Contenido[i].Descripcion}</p>
                            <a href="${pestanias.Main.Contenido[i].Enlace}" class="btn APIs-btn">🚀 ¡A explorar el lugar! 👀</a>
                        </div>
                    </div>
            `;
            }

            carrousel(APIs_main_div, botonIzquierda, botonDerecha);

        }

        if (!pestanias) {
            console.error('Error: datos de pestanias no disponibles');
            return;
        }
    } catch (error) {
        console.error(`Error al obtener los datos: ${error.message}`);
    }
}

export default main;