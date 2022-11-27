import { addTask } from "./components/newTask.js";
import { displayTasks } from "./components/readTask.js";
const btnAdd = document.querySelector('[data-form-btn]');


btnAdd.addEventListener('click', addTask);
displayTasks();



