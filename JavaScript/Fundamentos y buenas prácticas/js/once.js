// Crea una lista de productos con precios. 
// Usa filter() para mostrar solo los productos menores de $50. 
// Usa map() para formatear los precios y mostrarlos en pantalla.

const productos = [
    { nombre: "Camisa", precio: 25 },
    { nombre: "Zapatos", precio: 60 },
    { nombre: "Gorra", precio: 15 },
    { nombre: "Pantalón", precio: 45 },
    { nombre: "Bolso", precio: 80 }
];

function mostrarProductos(lista) {
    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = lista.map(p => 
        `<div class="producto">${p.nombre} - $${p.precio}</div>`).join("");
}

function filtrarProductos() {
    const productosFiltrados = productos.filter(p => p.precio < 50);
    mostrarProductos(productosFiltrados);
}

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);

// ✔ Muestra una lista de productos con su precio.
// ✔ Un botón filtra los productos menores de $50 usando filter().
// ✔ map() formatea el HTML para mostrarlo en la página.