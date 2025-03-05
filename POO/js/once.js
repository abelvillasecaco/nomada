// Crea una clase Galeria que agregue imágenes a la página al hacer clic en un botón.

class Galeria {
    constructor() {
        this.contenedor = document.getElementById("galeria");
        document.getElementById("agregarImagen").addEventListener("click", () => this.agregarImagen());
    }

    agregarImagen() {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/200?random=${Math.random()}`;
        img.alt = "Imagen aleatoria";
        this.contenedor.appendChild(img);
    }
}

new Galeria();