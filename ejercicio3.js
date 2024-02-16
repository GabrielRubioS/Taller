//  Buscar un elemento en un array
// • Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
// • Busca un elemento específico en el array por su valor.
// • Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
// • Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).

let nombre=["marino", "pablo", "chili", "topo", "Albert", 2, 4, true, false, "perro"]
let nombre1=nombre.find(x=>x("marino"))
if (nombre1.length > 0) {
    let indice = nombre.indexOf(nombre1[0]);
    console.log("El elemento  se encuentra en la posición " + indice + " del array.");
  } else {
    console.log("El elemento  no se encuentra en el array.");
  }
  console.log(nombre1)


