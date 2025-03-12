// Crea una clase Calculadora que permita sumar dos números ingresados en un formulario y muestre el resultado en pantalla.

class Calculadora {
    constructor() {
        this.boton = document.getElementById("sumar");
        this.boton.addEventListener("click", () => this.sumar());
    }

    sumar() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        if (!isNaN(num1) && !isNaN(num2)) {
            document.getElementById("resultado").textContent = num1 + num2;
        }
    }
}

new Calculadora();