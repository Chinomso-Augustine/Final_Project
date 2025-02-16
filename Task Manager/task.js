

let tasks = [];

class Task {
    constructor(text, dueDate) {
        this.text = text;
        this.dueDate = dueDate? dueDate: "No Due Date Set";
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
        checkBox.classList.add("checkBtn");//checkbox class for styling the btn
        checkBox.checked = this.completed; //Set checkBox = completion(this is currently false)

        let taskText = document.createElement('span'); //creating span for easy styling 
        taskText.textContent = this.text;//sets taskText to the input text
        taskText.style.textDecoration = this.completed ? "line-through" : "none"; //Checks if text is completed, if true, cross it

        let taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.textContent = "Delete";//delete btn
        taskDeleteBtn.classList.add("deleteBtn"); //Delete button for styling
        taskDeleteBtn.onclick = () => { //deletes text after clicked
            deleteTask(this);
        };

        checkBox.addEventListener('change', () => {
            this.toggleComplete(); //Updates checkbox
            taskText.style.textDecoration = this.completed ? "line-through" : "none"; //Checks if text is completed, if true, cross it

        })

        let dateCreated = document.createElement('span') ; //for date created
        dateCreated.textContent= `Created: ${this.dateCreated}`;//captures date Info
        dateCreated.classList.add("dateCreatedBtn"); //class for styling


        let dueDate = document.createElement('span'); //for due date
        dueDate.textContent = `Due Date: ${this.dueDate}`; 
        dueDate.classList.add("dueDateDisplay"); 


        list.appendChild(checkBox); //Add checkbox to list
        list.appendChild(taskText); //add tasktext to list
        list.appendChild(dateCreated);
        list.appendChild(dueDate); 
        list.appendChild(taskDeleteBtn);
        return list; //returns the list
    }


}

function addTask() {
    let inputText = document.getElementById('taskInput').value.trim();//Getting text input 
    let dueDate = document.getElementById('dueDateBtn').value.trim();  //Due date Input

    if (inputText === "") {
        return; //returns nothing if input is empty
    }

    let newTask = new Task(inputText, dueDate); //pass text and due date to Task
    tasks.push(newTask); //Pushing text and duedate into tasks

    let taskList = document.getElementById('taskList'); //gets taskList and store it in a new variable
    taskList.appendChild(newTask.TaskCreator()); // Append newTask inside taskList

    document.getElementById('taskInput').value = ""; //Clears input field
    document.getElementById('dueDate').value = ""; //Clears duedate field

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
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    tasks.forEach(task => {
        taskList.appendChild(task.TaskCreator());
    });
}