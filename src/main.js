const addBtn = document.getElementById('add-task');
const main = document.getElementById('tasks');
const clear = document.getElementById('clear');
const allTasks = document.getElementById('all-tasks');
const view = document.getElementById('view');
const form = document.getElementById('form');

var taskList = [];
var taskCount = 0;

function addTask(){
    const newInput = document.createElement('input');
    newInput.classList.add('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Enter task');

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn');
    newBtn.textContent = 'Add';
    
    form.appendChild(newInput);
    form.appendChild(newBtn);
    
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    newBtn.addEventListener('click', ()=>{
        // allTasks.appendChild(newItem);
        newItem.textContent = newInput.value;
        taskList.push(newItem.textContent);
    })
}

addBtn.addEventListener('click', ()=>{
    taskCount++;
    addTask();})

view.addEventListener('click', ()=>{
    console.log(taskList);
})