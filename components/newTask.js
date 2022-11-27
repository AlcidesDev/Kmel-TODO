import checkComplete from "./checkComplete.js"; 
import deleteBtn from "./deleteBtn.js";
import { displayTasks } from "./readTask.js";
import { uniqueDates } from "../services/date.js";


export const addTask = (evento)=>{
    evento.preventDefault();
    
    const list = document.querySelector('[data-list]');
    const inputAdd = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]')
    
    const value = inputAdd.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    
    if (value === "" || date === ""){
        return;
    } 

    inputAdd.value = "";
    calendar.value = "";
    
    const complete = false;

    const taskObject = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
        }

    list.innerHTML = "";
    
    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    taskList.push(taskObject);
    localStorage.setItem('task', JSON.stringify(taskList));
    
    displayTasks();
};



export const createTask = ({value, dateFormat, complete, id}) => {
    const task = document.createElement('li');
            task.classList.add('card');
        
    const taskContent = document.createElement('div');

    const check = checkComplete(id);
    if (complete){
        check.classList.toggle('fas');
        check.classList.toggle('far');
        check.classList.toggle('completeIcon');
    }
    console.log(check);
        
    const titleTask = document.createElement('span');
            titleTask.classList.add('task');
            titleTask.innerHTML = value;

            taskContent.appendChild(check);
            taskContent.appendChild(titleTask);


    
    const dateElement = document.createElement('span');
            dateElement.innerHTML = dateFormat;

            task.appendChild(taskContent);
            task.appendChild(dateElement); 
            task.appendChild(deleteBtn(id));


    return task;
};


