// Crea una clase Usuario con una propiedad privada #contraseña. Implementa un método validarContraseña()
// que permita verificar si la contraseña ingresada es correcta.

class Usuario {
    #contraseña;
  
    constructor(nombre, contraseña) {
      this.nombre = nombre;
      this.#contraseña = contraseña;
    }
  
    validarContraseña(contraseñaIngresada) {
      return this.#contraseña === contraseñaIngresada;
    }
  }
  
  // Crear usuario
  const usuario = new Usuario("Carlos", "secreto123");
  
  // Intentar validar la contraseña
  console.log(usuario.validarContraseña("secreto123")); // true
  console.log(usuario.validarContraseña("incorrecta")); // false
  
  // Intento de acceso directo (da error)
  // console.log(usuario.#contraseña); // ❌ Error: propiedad privada

// Se crea una propiedad privada #contraseña para evitar acceso externo.
// Se usa validarContraseña() para comparar la contraseña ingresada con la almacenada.
// Se crean instancias de Usuario y se prueban validaciones de contraseña.
// Se demuestra que el acceso directo a #contraseña genera un error.
  