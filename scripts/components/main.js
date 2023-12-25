import mainPrincipal from '../Apis/mainPrincipal.js';
import rickAndMortyInicio from './rickAndMorty/inicio.js'
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

export default async function main() {
    try {
        const pestanias = await mainPrincipal();
        const main = document.querySelector('.Apis-main');

        main.innerHTML += `
        <div class="container-APIs-main container">
            <div class="APIs-main-div">
                
                <div class="APIs-main-descripcion">
                    
                    <p>Descubre el futuro de la innovación y la tecnología en <span>APIs</span>. Explora proyectos emocionantes, sumérgete en experiencias interactivas y deslízate por nuestro carrusel visualmente impactante. En <span>APIs</span>, fusionamos la creatividad con la tecnología para ofrecer soluciones vanguardistas. ¡Explora, aprende y disfruta del emocionante cruce entre el arte y la innovación!</p>
                    <p class="APIs-main-descripcion-parrafo">¡Bienvenido a un espacio donde la tecnología cobra vida de manera creativa!</p>
                </div>
            </div>
            <div class="APIs-main-div">
                <h2 class="Apis-h2">PROYECTOS</h2>
            </div>
            <div class="APIs-main-div swiper mySwiper">
                <div class="APIs-main-div-container swiper-wrapper"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        `;

        const APIs_main_div = document.querySelector('.APIs-main-div-container');

        if (APIs_main_div) {
            for (let i = 0; i < pestanias.Main.Contenido.length; i++) {
                APIs_main_div.innerHTML += `
                    <div class="card APIs-card swiper-slide">
                        <img src="${pestanias.Main.Contenido[i].Img}" class="card-img-top" alt="${pestanias.Main.Contenido[i].Titulo}" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-blue"></div>
                        <div class="card-body APIs-card-body">
                            <h5 class="card-title">${pestanias.Main.Contenido[i].Titulo}</h5>
                            <p class="card-text">${pestanias.Main.Contenido[i].Descripcion}</p>
                            <a href="${pestanias.Main.Contenido[i].Enlace}" id="card-link-${i}" class="btn APIs-btn">🚀 ¡A explorar el lugar! 👀</a>
                        </div>
                    </div>
            `;
            }
        }

        const swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            lazy: true,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        rickAndMortyInicio();

        if (!pestanias) {
            console.error('Error: datos de pestanias no disponibles');
            return;
        }
    } catch (error) {
        console.error(`Error al obtener los datos: ${error.message}`);
    }
}