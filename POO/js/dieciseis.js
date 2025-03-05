// Crea una clase Reloj que actualice la hora en la pantalla en tiempo real.

class Reloj {
    constructor() {
        this.elemento = document.getElementById("hora");
        this.actualizarHora();
        setInterval(() => this.actualizarHora(), 1000);
    }

    actualizarHora() {
        const ahora = new Date();
        this.elemento.textContent = ahora.toLocaleTimeString("es-ES", { 
            timeZone: "America/Lima" ,
            hour12: true,
        });
    }
}

new Reloj();