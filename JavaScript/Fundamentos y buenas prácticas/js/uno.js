// Dado un array de nombres, usa map( ) para convertirlos a mayúsculas.

const nombres = ["ana", "juan", "pedro", "maria"];

// Usamos map() para convertir a mayúsculas
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());

console.log(nombresMayusculas); // ["ANA", "JUAN", "PEDRO", "MARIA"]

// map( ) recorre cada elemento y aplica toUpperCase( ) a cada nombre.