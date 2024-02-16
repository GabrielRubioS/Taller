let personas = [
    { nombre: "Pablo", edad: 24 },
    { nombre: "Juanita", edad: 18 },
    { nombre: "Mario", edad: 27 },
    { nombre: "Chili", edad: 17 },
    { nombre: "Sandra", edad: 20 }
];
//filtrar personas de mayor edad
let mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
console.log("Nombres de las personas mayores de edad:");
mayoresDeEdad.forEach(persona => console.log(persona.nombre));

console.log("\nPersonas mayores de edad:");
mayoresDeEdad.forEach(persona => console.log(`${persona.nombre} es mayor de edad`));