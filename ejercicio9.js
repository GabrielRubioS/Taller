// Crear un array con objetos que tengan una propiedad en común
const objetos = [
    { id: 1, color: 'rojo' },
    { id: 2, color: 'azul' },
    { id: 3, color: 'rojo' },
    { id: 4, color: 'verde' },
    { id: 5, color: 'azul' }
];

const grupos = objetos.reduce((acumulador, objeto) => {
    const color = objeto.color;
    if (!acumulador[color]) {
        acumulador[color] = [];
    }
    acumulador[color].push(objeto);
    return acumulador;
}, {});

console.log(grupos);
