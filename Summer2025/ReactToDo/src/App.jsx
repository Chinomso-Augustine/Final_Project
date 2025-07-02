import { useState } from 'react'
import './App.css'



function App() {
  const [userInput, setUserInput] = useState(""); //for getting input info //
  const [task, setTask] = useState([]);   //For storing tasks //
  const [completedTask, setCompletedTask] = useState([]); // for completed items

  function handleAddTask() {
    if (userInput != "") {
      const newTask = { text: userInput, completed: false }
      setTask([...task, newTask]) //pushing newTask into setTask
      setUserInput(""); //clearing the searchbar 
    }
  }

  {/*
    Goal: Given an index to remove, create a new array that will only store the items we don't want to remove and leave
    the index to remove behind. Then pass the new array into the list
  */}
  function handleDelete(indexToRemove) {
    let newTaskList = task.filter((items, i) => i !== indexToRemove);
    setTask(newTaskList);
  }

  function handleComplete(indexToComplete) {
    const finishedTask = task[indexToComplete];

    //add to completedTask list 
    setCompletedTask([...completedTask, finishedTask]);

    //Remove from main task list 
    const updatedTask = task.filter((items, index) => index !== indexToComplete);
    setTask(updatedTask);
  }
  return (
    <div className='inputContainer'>
      <div><input className='entry' value={userInput} onChange={(e) => setUserInput(e.target.value)} /> </div>
      {/*capture userValue with value ={userInput}, update state with onClick */}
      <div>
        <button className='addTask' onClick={handleAddTask}> Add Task </button>  
      </div>
      <h3>To-Do List</h3>
      <ul>
        {task.map((items, index) => {
          return <li key={index}>{items.text}
            <button onClick={() => handleComplete(index)} className='completeBt'> Complete </button>
            <button onClick={() => handleDelete(index)} className='deleteBtn'> Delete</button>
          </li>
        })}
      </ul>

      {/*completed task */}
      <ul>
        {completedTask.map((item, index) =>(
          <li key={index}> {item.text} </li>
        ))}
      </ul>
    </div>
  )
}

export default App
