

let tasks = [];

class Task {
    constructor(text) {
        this.text = text;
        this.dateCreated = new Date().toLocaleString();
        this.completed = false;
        this.id = Date.now(); //Id for task
    }

    //Toggle method
    toggleComplete() {
        this.completed = !this.completed; //Flips the state of the completion. Specially when clicked multiple times 
    }

    //HTML generator Method
    TaskCreator() {
        let list = document.createElement('li'); //Creates list where task will be store

        let checkBox = document.createElement('input'); //Creates checkBox 
        checkBox.setAttribute('type', 'checkbox');

        checkBox.classList.add("addBtn");

        checkBox.checked = this.completed; //Set checkBox based on task completion

        let taskText = document.createElement('span'); //span for task
        taskText.textContent = this.text;
        taskText.style.textDecoration = this.completed ? "line-through" : "none"; //Checks if text is completed, if true, cross it

        let taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.textContent = "Delete";//delete btn

        taskDeleteBtn.onclick =() => {
            deleteTask(this);
        };

        checkBox.addEventListener('change', () => {
            this.toggleComplete(); //Updates checkbox
            taskText.style.textDecoration = this.completed ? "line-through" : "none"; //Checks if text is completed, if true, cross it

        })
        list.appendChild(checkBox); //Add checkbox to list
        list.appendChild(taskText); //add tasktext to list
        list.appendChild(taskDeleteBtn); 
        return list; //returns the list
    }


}

function addTask() {
    let inputText = document.getElementById('taskInput').value.trim();
    if (inputText === "") {
        return;
    }
    let newTask = new Task(inputText); //Creates new task object/instance of object
    tasks.push(newTask); //Pushing to tasks

    let taskList = document.getElementById('taskList'); //gets task list container
    taskList.appendChild(newTask.TaskCreator()); // Append new task

    document.getElementById('taskInput').value = ""; //Clears input field
}
document.getElementById('addTaskBtn').addEventListener('click', addTask);


//Delete Task function 
function deleteTask(task) {

    //find index to delete
    let index = tasks.findIndex(t => t.id === task.id);//Finds index by ID

    if (index != -1) {
        tasks.splice(index, 1); //removes task 
    }
    clearTaskList();
}

function clearTaskList() {
   let taskList =  document.getElementById('taskList');
   taskList.innerHTML = "";

    tasks.forEach(task => {
        taskList.appendChild(task.TaskCreator());
    } );
}