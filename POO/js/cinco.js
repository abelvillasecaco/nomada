// Crea una clase Persona y otra Direccion. Haz que una Persona pueda tener una Direccion asociada.

class Direccion {
    constructor(calle, ciudad) {
      this.calle = calle;
      this.ciudad = ciudad;
    }
  
    mostrarDireccion() {
      return `${this.calle}, ${this.ciudad}`;
    }
  }
  
  class Persona {
    constructor(nombre, edad, direccion) {
      this.nombre = nombre;
      this.edad = edad;
      this.direccion = direccion; // Asociación con la clase Direccion
    }
  
    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Dirección: ${this.direccion.mostrarDireccion()}`);
    }
  }
  
  // Crear dirección
  const miDireccion = new Direccion("Av. Siempre Viva 742", "Springfield");
  
  // Crear persona con dirección
  const persona = new Persona("Homero Simpson", 39, miDireccion);
  
  // Mostrar información de la persona
  persona.mostrarInformacion();
  
// Se crea una clase Direccion con calle y ciudad.
// Se crea una clase Persona que tiene una dirección como propiedad.
// Se demuestra la relación uno a uno entre Persona y Direccion.