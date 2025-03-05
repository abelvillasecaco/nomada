// Crea una clase GeneradorContraseña que genere contraseñas aleatorias de 8 caracteres y las muestre en pantalla.

class GeneradorContraseña {
    constructor() {
        this.caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        document.getElementById("generar").addEventListener("click", () => this.generar());
    }

    generar() {
        let password = "";
        for (let i = 0; i < 8; i++) {
            password += this.caracteres.charAt(Math.floor(Math.random() * this.caracteres.length));
        }
        document.getElementById("password").textContent = password;
    }
}

new GeneradorContraseña();