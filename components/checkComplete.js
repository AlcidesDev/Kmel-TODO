

const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};

const completeTask = (event)=> {
    const element = event.target;
    console.log(element);
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.classList.toggle('completeIcon');
};

export default checkComplete;