// Crea una clase ConversorMoneda con un método estático que convierta dólares a euros.

class ConversorMoneda {
    static tasaCambio = 0.85; // 1 USD = 0.85 EUR
  
    static convertirDolaresAEuros(dolares) {
      return dolares * this.tasaCambio;
    }
  }
  
  // Uso del método estático
  console.log(ConversorMoneda.convertirDolaresAEuros(100)); // 85
  console.log(ConversorMoneda.convertirDolaresAEuros(250)); // 212.5

// Se define una clase ConversorMoneda con una propiedad estática tasaCambio.
// Se implementa un método estático convertirDolaresAEuros().
// Como es estático, el método se llama directamente desde la clase, sin instanciar un objeto.