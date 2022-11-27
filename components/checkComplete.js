

const checkComplete = (id)=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', (event)=> completeTask(event, id));
    return i;
};

const completeTask = (event, id)=> {
    const element = event.target;
    console.log(element);
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.classList.toggle('completeIcon');
    console.log('check id', id);
    const tasks = JSON.parse(localStorage.getItem('task'));
    console.log(tasks);
    const index = tasks.findIndex( item => item.id === id);
    tasks[index]['complete'] = !tasks[index]['complete'];
    localStorage.setItem('task', JSON.stringify(tasks));
};

export default checkComplete;