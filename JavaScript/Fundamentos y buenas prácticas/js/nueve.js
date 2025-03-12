// Dado un array de números, usa Rest (...) para capturar los valores restantes después del primero.

const numeros = [10, 20, 30, 40];

// Extraemos el primer valor y el resto lo agrupamos en un array
const [primero, ...resto] = numeros;

console.log(primero); // 10
console.log(resto);   // [20, 30, 40]

// primero obtiene el primer valor.
// ...resto agrupa los demás valores en un array.