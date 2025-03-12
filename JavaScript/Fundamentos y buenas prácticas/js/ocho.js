// Dado un objeto con datos de una persona, usa Spread (...) para crear un nuevo objeto con una propiedad adicional.

const persona = { nombre: "Ana", edad: 28 };

// Usamos Spread para copiar y agregar una nueva propiedad
const personaActualizada = { ...persona, ciudad: "Madrid" };

console.log(personaActualizada); 
// { nombre: "Ana", edad: 28, ciudad: "Madrid" }

// ...persona copia las propiedades y se añade ciudad: "Madrid".