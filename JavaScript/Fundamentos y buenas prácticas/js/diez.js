// Dado un objeto con información de un usuario, usa Rest (...) para extraer su nombre 
// y almacenar el resto de propiedades en otro objeto.

const usuario = {
    nombre: "Elena",
    edad: 30,
    profesion: "Ingeniera",
    ciudad: "Barcelona"
};

// Extraemos nombre y capturamos el resto
const { nombre, ...otrosDatos } = usuario;

console.log(nombre); // "Elena"
console.log(otrosDatos); 
// { edad: 30, profesion: "Ingeniera", ciudad: "Barcelona" }

// nombre se extrae como variable.
// ...otrosDatos captura las demás propiedades en un nuevo objeto.