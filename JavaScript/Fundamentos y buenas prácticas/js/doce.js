// Crea un formulario donde el usuario pueda ingresar gastos. 
// Usa reduce() para calcular el total y muestra los valores en pantalla.

let gastos = [];

function agregarGasto() {
    const nombre = document.getElementById("nombreGasto").value;
    const cantidad = parseFloat(document.getElementById("cantidadGasto").value);

    if (nombre && cantidad > 0) {
        // Usamos Spread para agregar un nuevo gasto
        gastos = [...gastos, { nombre, cantidad }];
        mostrarGastos();
    }
}

function mostrarGastos() {
    const contenedor = document.getElementById("lista-gastos");
    contenedor.innerHTML = gastos.map(({nombre, cantidad}) =>
        `<div class="gasto">${nombre}: $${cantidad}</div>`
    ).join("");

    // Calculamos el total usando reduce()
    const total = gastos.reduce((acc, {cantidad}) => acc + cantidad, 0);
    document.getElementById("total").textContent = total;
}

// ✔ Permite ingresar gastos dinámicamente.
// ✔ Usa spread para agregar nuevos gastos sin modificar el array original.
// ✔ Usa destructuración para extraer nombre y cantidad.
// ✔ Usa reduce() para calcular el total de los gastos.