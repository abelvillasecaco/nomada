// Crea una clase Usuario que muestre el nombre y la edad de una persona en una tarjeta dentro de la página web.

class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    crearTarjeta() {
        const div = document.createElement("div");
        div.classList.add("tarjeta");
        div.innerHTML = `<h3>${this.nombre}</h3><p>Edad: ${this.edad}</p>`;
        return div;
    }
}

const usuario = new Usuario("Carlos", 25);
document.getElementById("contenedor").appendChild(usuario.crearTarjeta());