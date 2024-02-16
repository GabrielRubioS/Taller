// Crear un array con elementos duplicados
const Repetidos = [1, 2, 3, 3, 4, 5, 5];

// Eliminar elementos duplicados
const norepetidos = Repetidos.filter((elemento, indice, self) => {
    return self.indexOf(elemento) === indice;
});
console.log(norepetidos);
