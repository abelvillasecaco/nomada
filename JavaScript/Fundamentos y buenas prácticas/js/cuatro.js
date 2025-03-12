// Dado un array de palabras, usa reduce( ) para contar cuántas veces aparece cada palabra.

const palabras = ["rojo", "azul", "rojo", "verde", "azul", "rojo"];

// Contamos cuántas veces aparece cada palabra
const conteo = palabras.reduce((acumulador, palabra) => {
    acumulador[palabra] = (acumulador[palabra] || 0) + 1;
    return acumulador;
}, {});

console.log(conteo); // { rojo: 3, azul: 2, verde: 1 }

// reduce( ) crea un objeto donde cada palabra es una clave y el valor es su cantidad.