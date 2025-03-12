// Dado un array de números, usa reduce( ) para calcular la suma total.

const numeros = [5, 10, 15, 20];

// Reducimos el array sumando sus elementos
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma); // 50

// reduce( ) acumula la suma de los números, comenzando en 0.