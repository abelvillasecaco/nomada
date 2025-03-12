// Dado un objeto con información de una persona, usa destructuración para extraer su nombre y edad.

const persona = {
    nombre: "Carlos",
    edad: 25,
    ciudad: "Lima"
};

// Destructuración del objeto
const { nombre, edad } = persona;

console.log(nombre); // "Carlos"
console.log(edad); // 25

// Se extraen las propiedades nombre y edad en variables.