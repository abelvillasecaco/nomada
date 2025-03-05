// Crea una clase abstracta Vehiculo con un método arrancar(). Luego, crea dos clases Coche y Moto que implementen este método.

// Clase base abstracta
class Vehiculo {
    arrancar() {
      throw new Error("El método arrancar() debe ser implementado por las subclases.");
    }
  }
  
  // Subclase Coche
  class Coche extends Vehiculo {
    arrancar() {
      console.log("El coche arranca con la llave.");
    }
  }
  
  // Subclase Moto
  class Moto extends Vehiculo {
    arrancar() {
      console.log("La moto arranca con el botón de encendido.");
    }
  }
  
  // Creación de objetos y prueba de la abstracción
  const miCoche = new Coche();
  const miMoto = new Moto();
  
  miCoche.arrancar(); // El coche arranca con la llave.
  miMoto.arrancar(); // La moto arranca con el botón de encendido.
  
// Se crea una clase base Vehiculo con un método abstracto arrancar().
// Se crean dos subclases Coche y Moto que implementan arrancar().
// Se crean objetos de Coche y Moto y se ejecuta el método arrancar().