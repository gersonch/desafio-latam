const btnAgregate = document.getElementById("btn-agregate");
const ulTasks = document.getElementById("tasks");
const input = document.getElementById("input");
const info = document.getElementById("info");

let tasks = [];

function agregarTarea() {
  const taskText = input.value.trim();

  if (taskText === "") {
    // Cambiar la verificación aquí para usar taskText en lugar de input.value
    ulTasks.innerHTML = `<p>Debes agregar contenido</p>`;
    return;
  }

  const taskId = tasks.length + 1;
  const newTask = {
    id: taskId,
    task: taskText,
    completed: false, // Nueva propiedad para el estado de la tarea
  };

  tasks.push(newTask);

  const li = document.createElement("li");
  li.innerHTML = `
        <p>id:${newTask.id}</p>
        <button class="btnCompletar" class="button-li" data-id="${newTask.id}">o</button>
        <p> ${newTask.task}</p>
        <button class="btnEliminar" class="button-li" data-id="${newTask.id}">x</button>
        
    `;

  ulTasks.appendChild(li);

  // Agregar event listener al botón de eliminar
  li.querySelector(".btnEliminar").addEventListener("click", function () {
    eliminarTarea(newTask.id, li);
  });

  // Agregar event listener al botón de completar
  li.querySelector(".btnCompletar").addEventListener("click", function () {
    completarTarea(newTask.id, li);
  });

  input.value = "";
}

function eliminarTarea(taskId, liElement) {
  // Filtrar la tarea a eliminar del array de tareas
  tasks = tasks.filter((task) => task.id !== taskId);

  // Eliminar el elemento li del DOM
  liElement.remove();
  mostrarInfo();
}

function completarTarea(taskId, liElement) {
  // Encontrar la tarea en el array de tareas y cambiar su estado
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    task.completed = !task.completed; // Cambiar el estado de completado

    // Cambiar la apariencia en el DOM
    if (task.completed) {
      liElement.style.textDecoration = "line-through";
    } else {
      liElement.style.textDecoration = "none";
    }
  }
}

btnAgregate.addEventListener("click", agregarTarea);
