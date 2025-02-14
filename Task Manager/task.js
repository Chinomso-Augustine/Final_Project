

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
    render() {
        let list = document.createElement('li'); //Creates list where task will be store

        let checkBox = document.createElement('input'); //Creates checkBox 
        checkBox.setAttribute('type', 'checkbox');

        checkBox.checked = this.completed; //Set checkBox based on task completion

        let taskText = document.createElement('span'); //span for task
        taskText.textContent = this.text;
        taskText.style.textDecoration = this.completed ? "line-through" : "none"; //Checks if text is completed, if true, cross it

        checkBox.addEventListener('change', () => {
            this.toggleComplete(); //Updates checkbox
            taskText.style.textDecoration = this.completed ? "line-through" : "none"; //Checks if text is completed, if true, cross it

        })
        list.appendChild(checkBox); //Add checkbox to list
        list.appendChild(taskText); //add tasktext to list
        return list; //returns the list
    }

   
}

function addTask(){
    let inputText = document.getElementById('taskInput').value.trim(); 
    if(inputText === " "){
        return; 
    }
let newTask = new Task(inputText); //Creates new task object/instance of object
tasks.push(newTask); //Pushing to tasks
    
let taskList = document.getElementById('taskList'); //gets task list container
taskList.appendChild(newTask.render()); // Append new task

document.getElementById('taskInput').value = " "; //Clears input field
}
document.getElementById('addTaskBtn').addEventListener('click', addTask);