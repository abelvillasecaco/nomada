// Crea una clase Temporizador que permita iniciar y detener un temporizador que se actualice en pantalla cada segundo.

class Temporizador {
    constructor() {
        this.segundos = 0;
        this.intervalo = null;
        this.elemento = document.getElementById("tiempo");

        document.getElementById("iniciar").addEventListener("click", () => this.iniciar());
        document.getElementById("detener").addEventListener("click", () => this.detener());
    }

    iniciar() {
        if (!this.intervalo) {
            this.intervalo = setInterval(() => {
                this.segundos++;
                this.elemento.textContent = this.segundos;
            }, 1000);
        }
    }

    detener() {
        clearInterval(this.intervalo);
        this.intervalo = null;
    }
}

new Temporizador();