const URL = 'https://rickandmortyapi.com/api';

const personaje = async (id) => { 
    const respuesta = await fetch(`${URL}/character/${id}`);
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
}

const personajes = async (page) => {
    const respuesta = await fetch(`${URL}/character/?page=${page}`);
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
}

export { personaje, personajes };