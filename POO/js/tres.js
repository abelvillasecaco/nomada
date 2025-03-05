// Crea una clase Producto con propiedades privadas #nombre y #precio. 
// Implementa getters y setters para acceder y modificar los valores, asegurando que el precio no sea negativo.

class Producto {
    #nombre;
    #precio;
  
    constructor(nombre, precio) {
      this.#nombre = nombre;
      this.#precio = precio;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
  
    get precio() {
      return this.#precio;
    }
  
    set precio(nuevoPrecio) {
      if (nuevoPrecio >= 0) {
        this.#precio = nuevoPrecio;
      } else {
        console.log("Error: El precio no puede ser negativo.");
      }
    }
  }
  
  // Crear producto
  const producto = new Producto("Laptop", 1200);
  
  // Usar getters
  console.log(producto.nombre); // Laptop
  console.log(producto.precio); // 1200
  
  // Usar setters
  producto.nombre = "Tablet";
  producto.precio = 800;
  console.log(producto.nombre); // Tablet
  console.log(producto.precio); // 800
  
  producto.precio = -100; // Error
  
// Se usan propiedades privadas #nombre y #precio.
// Se implementan getters para acceder a los valores.
// Se usan setters para modificar valores con validación (el precio no puede ser negativo).
// Se prueba la clase y se valida el control de acceso.