import obtenerDatos from './obtenerDatos.js';

async function header() {
    obtenerDatos();
    try {
        const pestanias = await obtenerDatos();

        const header = document.querySelector('.APIs-header');
        
        header.innerHTML = `
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    ${pestanias.Img} ${pestanias.Titulo}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse APIs-navbar-collapse" id="navbarSupportedContent">
                    <ul class="APIs-navbar-nav navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">${pestanias.Header.Español.Inicio}</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                ${pestanias.Header.Español.Contactanos}
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="https://github.com/AndywClav/" rel="noopener"
                                        target="_blank">GitHub</a></li>
                                <li><a class="dropdown-item" href="https://linkedin.com/in/andywclav/" rel="noopener"
                                        target="_blank">Linkedin</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item APIs-dropdown-item" href="#">${pestanias.Header.Español.Portafolio}</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle APIs-nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                ${pestanias.Header.Español.Idioma.Idioma}
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item APIs-dropdown-item" href="#">${pestanias.Header.Español.Idioma.Español}</a></li>
                                <li><a class="dropdown-item APIs-dropdown-item" href="#">${pestanias.Header.Español.Idioma.Ingles}</a></li>
                                <li><a class="dropdown-item APIs-dropdown-item" href="#">${pestanias.Header.Español.Idioma.Portugues}</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;

        const navLink = document.querySelectorAll('.nav-link');
        const dropdownItem = document.querySelectorAll('.APIs-dropdown-item');

        dropdownItem[1].addEventListener('click', () => {
            
            navLink[0].innerHTML = `${pestanias.Header.Español.Inicio}`;
            navLink[1].innerHTML = `${pestanias.Header.Español.Contactanos}`;
            navLink[2].innerHTML = `${pestanias.Header.Español.Idioma.Idioma}`;
            
            dropdownItem[0].innerHTML = `${pestanias.Header.Español.Portafolio}`;
            dropdownItem[1].innerHTML = `${pestanias.Header.Español.Idioma.Español}`;
            dropdownItem[2].innerHTML = `${pestanias.Header.Español.Idioma.Ingles}`;
            dropdownItem[3].innerHTML = `${pestanias.Header.Español.Idioma.Portugues}`;
        });

        dropdownItem[2].addEventListener('click', () => {
            
            navLink[0].innerHTML = `${pestanias.Header.English.Home}`;
            navLink[1].innerHTML = `${pestanias.Header.English.Contact_us}`;
            navLink[2].innerHTML = `${pestanias.Header.English.Language.Language}`;
            
            dropdownItem[0].innerHTML = `${pestanias.Header.English.Portfolio}`;
            dropdownItem[1].innerHTML = `${pestanias.Header.English.Language.Spanish}`;
            dropdownItem[2].innerHTML = `${pestanias.Header.English.Language.English}`;
            dropdownItem[3].innerHTML = `${pestanias.Header.English.Language.Portuguese}`;
        });

        dropdownItem[3].addEventListener('click', () => {
            
            navLink[0].innerHTML = `${pestanias.Header.Portugues.Inicio}`;
            navLink[1].innerHTML = `${pestanias.Header.Portugues.Contacte_nos}`;
            navLink[2].innerHTML = `${pestanias.Header.Portugues.Idioma.Idioma}`;
            
            dropdownItem[0].innerHTML = `${pestanias.Header.Portugues.Portfolio}`;
            dropdownItem[1].innerHTML = `${pestanias.Header.Portugues.Idioma.Espanhol}`;
            dropdownItem[2].innerHTML = `${pestanias.Header.Portugues.Idioma.Ingles}`;
            dropdownItem[3].innerHTML = `${pestanias.Header.Portugues.Idioma.Portugues}`;
        });
        if (!pestanias) {
                console.error('Error: datos de pestanias no disponibles');
                return;
            }
    } catch (error) {
        console.error(`Error al obtener los datos: ${error.message}`);
    }
}

export default header;