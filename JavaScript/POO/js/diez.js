// Crea una clase Tema que permita cambiar el color del fondo de la página al hacer clic en un botón.

class Tema {
    constructor() {
        this.boton = document.getElementById("cambiarTema");
        this.boton.addEventListener("click", () => this.toggleTema());
    }

    toggleTema() {
        document.body.classList.toggle("oscuro");
    }
}

new Tema();