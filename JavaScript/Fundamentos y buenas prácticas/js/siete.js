// Dado dos arrays de números, usa Spread (...) para combinarlos en uno solo.

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// Combinamos usando Spread
const numerosCombinados = [...numeros1, ...numeros2];

console.log(numerosCombinados); // [1, 2, 3, 4, 5, 6]

// ...numeros1 y ...numeros2 expanden los valores dentro del nuevo array.