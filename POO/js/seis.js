// Crea una clase Libro y otra Biblioteca. La Biblioteca debe contener una lista de Libro y permitir agregarlos.

class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    mostrarInformacion() {
      return `"${this.titulo}" de ${this.autor}`;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.libros = [];
    }
  
    agregarLibro(libro) {
      this.libros.push(libro);
    }
  
    mostrarLibros() {
      console.log("Lista de libros en la biblioteca:");
      this.libros.forEach(libro => console.log(libro.mostrarInformacion()));
    }
  }
  
  // Crear biblioteca
  const biblioteca = new Biblioteca();
  
  // Crear libros
  const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");
  const libro2 = new Libro("1984", "George Orwell");
  
  // Agregar libros a la biblioteca
  biblioteca.agregarLibro(libro1);
  biblioteca.agregarLibro(libro2);
  
  // Mostrar los libros
  biblioteca.mostrarLibros();

//   Se define una clase Libro con título y autor.
//   Se define Biblioteca, que contiene una lista de libros (libros).
//   Biblioteca tiene métodos para agregar libros y listarlos.
//   Se prueban las funcionalidades.