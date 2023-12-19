export default function carrousel(variables, botonIzquierda, botonDerecha) {
    let index = 0;

    function moveCarousel() {
        const translateValue = index * -101;
        variables.style.transform = `translateX(${translateValue}px)`;
    }

    botonIzquierda.addEventListener('click', () => {
        index = (index - 1 + variables.children.length);
        moveCarousel();
    });

    botonDerecha.addEventListener('click', () => {
        index = (index + 1 - variables.children.length);
        moveCarousel();
    });
}