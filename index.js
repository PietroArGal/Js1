let tareas = [];

function agregarTarea(texto) {
    const tarea = {
        texto: texto,
        completada: false
    };

    tareas.push(tarea);

    actualizarListaTareas();
}

const formulario = document.getElementById("formulario-tareas");
const nuevaTareaInput = document.getElementById("nueva-tarea");

formulario.addEventListener("submit", event => {
    event.preventDefault();

    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto) {
        agregarTarea(nuevaTareaTexto);

        nuevaTareaInput.value = "";
    }
});

agregarTarea("Hacer la compra");


function actualizarListaTareas() {
    const ul = document.getElementById("lista-tareas");

    ul.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");

        li.innerText = tarea.texto;

        if (tarea.completada) {
            li.classList.add("completada");
        }

        li.addEventListener("click", () => {
            tarea.completada = !tarea.completada;

            actualizarListaTareas();
        });

        ul.appendChild(li);
    });
}
