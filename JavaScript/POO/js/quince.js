// Crea una clase ConversorTemperatura que convierta grados Celsius a Fahrenheit al escribir un número en un input.

class ConversorTemperatura {
    constructor() {
        this.input = document.getElementById("celsius");
        this.input.addEventListener("input", () => this.convertir());
    }

    convertir() {
        const celsius = parseFloat(this.input.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2);
        }
    }
}

new ConversorTemperatura();