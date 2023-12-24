const URL = 'https://rickandmortyapi.com/api';

const getCharacter = async (id) => { 
    const respuesta = await fetch(`${URL}/character/${id}`);
    const data = await respuesta.json();
    console.log(data);
    return data;
}

const getCharacters = async (page) => {
    const respuesta = await fetch(`${URL}/character/?page=${page}`);
    const data = await respuesta.json();
    console.log(data);
    return data;
}

export { getCharacter, getCharacters };