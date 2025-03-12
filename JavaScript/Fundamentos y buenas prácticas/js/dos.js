// Dado un array de números, usa filter( ) para obtener solo los pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Filtramos los números pares
const numerosPares = numeros.filter(num => num % 2 === 0);

console.log(numerosPares); // [2, 4, 6, 8]

// filter( ) devuelve un nuevo array con los números que cumplen la condición num % 2 === 0.