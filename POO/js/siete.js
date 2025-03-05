// Crea una clase Contador que maneje la cantidad de veces que se presiona un botón en una página web. 
// La cuenta debe actualizarse en pantalla cada vez que el botón sea presionado.

class Contador {
    constructor() {
        this.contador = 0;
        this.elemento = document.getElementById("contador");
        document.getElementById("boton").addEventListener("click", () => this.incrementar());
    }

    incrementar() {
        this.contador++;
        this.elemento.textContent = this.contador;
    }
}

// Instanciar la clase y activarla
new Contador();

// Se crea la clase Contador con una propiedad contador inicializada en 0.
// Se obtiene el elemento p donde se mostrará el contador.
// Se agrega un event listener al botón para llamar al método incrementar().
// El método incrementar() aumenta el contador y actualiza el texto en pantalla.