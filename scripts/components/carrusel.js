export default function carrousel(variables, botonIzquierda, botonDerecha) {
    let index = 0;
    const maxIndex = variables.children.length + 3;
    const minIndex = variables.children.length - 18;

    function moveCarousel() {
        const translateValue = index * -51;
        variables.style.transform = `translateX(${translateValue}px)`;
    }

    botonDerecha.addEventListener('click', () => {
        if (index < maxIndex) {
            index++;
            moveCarousel();
        }
    });

    botonIzquierda.addEventListener('click', () => {
        if (index > minIndex) {
            index--;
            moveCarousel();
        }
    });

    // Eventos de teclado

    const ArrowLeft = 39;
    const ArrowRight = 37;

    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowRight' || event.code === ArrowRight) {
            if (index < maxIndex) {
                index++;
                moveCarousel();
            }
        } else if (event.code === 'ArrowLeft' || event.code === ArrowLeft) {
            if (index > minIndex) {
                index--;
                moveCarousel();
            }
        }
    });


    // Eventos táctiles
    let startX;

    variables.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    variables.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX;

        if (deltaX > 0 && index > minIndex) {
            index--;
            moveCarousel();
        } else if (deltaX < 0 && index < maxIndex) {
            index++;
            moveCarousel();
        }
    });
}
