// Crear un array con números aleatorios
let NumAle = [];
for (let i = 0; i < 10; i++) {
    NumAle.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
}
console.log("Numeros antes de ordenarlos:");
console.log(NumAle);

NumAle.sort((a, b) => a - b);
console.log("\nNumeros ordenados de forma ascendente:");
console.log(NumAle);


NumAle.sort((a, b) => b - a);
console.log("\nNumeros ordenado de forma descendente:");
console.log(NumAle);