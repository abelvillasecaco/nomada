// Crea una clase ListaTareas que permita agregar tareas a una lista y mostrarlas en pantalla.

class ListaTareas {
    constructor() {
        this.tareas = [];
        this.lista = document.getElementById("listaTareas");
        document.getElementById("agregarTarea").addEventListener("click", () => this.agregarTarea());
    }

    agregarTarea() {
        const tareaTexto = document.getElementById("tareaInput").value;
        if (tareaTexto.trim() !== "") {
            this.tareas.push(tareaTexto);
            const li = document.createElement("li");
            li.textContent = tareaTexto;
            this.lista.appendChild(li);
            document.getElementById("tareaInput").value = "";
        }
    }
}

new ListaTareas();