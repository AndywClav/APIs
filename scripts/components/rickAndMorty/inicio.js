import { personajes } from "../../Apis/rickAndMorty.js";

const charactersList = async (page = 1) => {
    const container = document.querySelector('#characters');
    const loader = document.querySelector('#lds-ring');

    loader.style.display = 'grid';
    const { results } = await personajes(page);
    loader.style.display = 'none';

    results.forEach(character => {
        const article = document.createElement('article');
        article.setAttribute('class', 'character');
        article.innerHTML = `
        <img src="${character.image}" alt="">
        <h2>${character.name}</h2>
        <div>
            <p>${character.species}</p>
            <p class="${character.status.toLowerCase()}"></p>
        </div>
        <a href=" /#/${character.id}">Ver detalle</a>
        `
        container.appendChild(article);
    });


    window.addEventListener('hashchange', () => {
        const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
        localStorage.setItem('charID', id);
        window.location.replace('../pages/characters.html');
    })
}

export default async function rickAndMortyInicio() {
    const link = document.querySelector("#card-link-0");

    link.addEventListener('click', (e) => {
        e.preventDefault();

        const main = document.querySelector('.Apis-main');
        const containerApisPrincipal = document.querySelector('.container-APIs-main');
        
        if (containerApisPrincipal) { 
            containerApisPrincipal.remove();

            main.innerHTML += `
                <div id="characters">
                    <div id="lds-ring" class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                `
        }

        charactersList();
    });
}