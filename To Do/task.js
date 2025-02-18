

let tasks = [];
document.getElementById("toggleHistoryBtn").addEventListener("click", toggleHistory); //for activating toggleHistory

class Task {
    constructor(text, dueDate) {
        this.text = text;
        this.dueDate = dueDate ? dueDate : "No Due Date Set";
        this.dateCreated = new Date().toLocaleString();
        this.completed = false;
        this.id = Date.now(); //Id for task
        this.dateCompleted = null;

    }

    //Toggle method when task is completed
    toggleComplete() {
        this.completed = !this.completed; //since task was initialized with false, we change to true
        this.dateCompleted = this.completed ? new Date().toLocaleString() : null;
        updateHistory();//For updating history
        clearTaskList(); //for refreshing task
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
        taskDeleteBtn.onclick = () => {deleteTask(this)};

        checkBox.addEventListener('change', () => {
            this.toggleComplete(); //Updates checkbox
            taskText.style.textDecoration = this.completed ? "line-through" : "none"; //Checks if text is completed, if true, cross it

        })

        let dateCreated = document.createElement('span'); //for date created
        dateCreated.textContent = `Date Created: ${this.dateCreated}`;//captures date Info
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
    let dueDateInput = document.getElementById('dueDateBtn').value.trim();  //Due date Input
    let currentDate = new Date().toISOString();

    if (inputText === "") return; //returns nothing if input is empty
    
    let newTask = new Task(inputText, dueDateInput); //pass text and due date to Task
    tasks.push(newTask); //Pushing text and duedate into tasks

    let taskList = document.getElementById('taskList'); //gets taskList and store it in a new variable
    taskList.appendChild(newTask.TaskCreator()); // Append newTask inside taskList

    document.getElementById('taskInput').value = ""; //Clears input field
    document.getElementById('dueDateBtn').value = currentDate; //Clears duedate field

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
    updateHistory();//Updates history after task is cleared
}

//function to show history 
function toggleHistory() {
    updateHistory(); 
    let history = document.getElementById('historyList');
    history.style.display = history.style.display === "none" || history.style.display === ""? "block":history.style.display = "none";
    }

function updateHistory() {
    let historyList = document.getElementById('historyList'); //Getting history input
    historyList.innerHTML = ""; //Clearing before updating

    let completedTasks = tasks.filter(task => task.completed);
    if(completedTasks.length === 0){
        historyList.innerHTML = "<li> No completed tasks yet</li>";
        return; 
    }

    completedTasks.forEach(task => {
         //Checks if task is completed 
            let tasksInHistory = document.createElement('li');
            tasksInHistory.textContent = `${task.text} was completed on ${task.dateCompleted ?task.dateCompleted: "Date Not Available"}`;
            historyList.appendChild(tasksInHistory);
    });

}