import checkComplete from "./components/checkComplete.js"; 
import deleteBtn from "./components/deleteBtn.js";


const btnAdd = document.querySelector('[data-form-btn]');
const inputAdd = document.querySelector('[data-form-input]');


const createTask = (evento) => {
    const task = document.createElement('li');
    const list = document.querySelector('[data-list]');
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    evento.preventDefault();
    let value = inputAdd.value;
    inputAdd.value = "";
    titleTask.innerHTML = value;
    titleTask.classList.add('task');
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
    task.appendChild(taskContent);
    task.appendChild(deleteBtn());
    task.classList.add('card');
    list.appendChild(task);
    console.log(taskContent);
};

btnAdd.addEventListener('click', createTask);




