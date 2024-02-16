// Crear un array con elementos de diferentes tipos
const array = ['nombre', 42, true, { a: 1, b: 2 }, ['uno', 'dos']];

// Convertir el array en un objeto
const objeto = array.reduce((acc, elemento, indice) => {
    acc['propiedad_' + indice] = elemento;
    return acc;
}, {});
console.log(objeto);
