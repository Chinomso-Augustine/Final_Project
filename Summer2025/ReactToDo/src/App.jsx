import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [userInput, setUserInput] = useState(""); //for getting input info //
  const [task, setTask] = useState([]);   //For storing tasks //
  const [completedItem, setCompletedItems] = useState([]); // for completed items

  function handleAddTask() {
    if (userInput != "") {
      let newTask = { text: userInput, completed: false }
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

  function handleComplete(indextToComplete){
    const updatedTask = task.map((items, index) =>{
      index === indextToComplete? {...items, completed: !items.completed}: items; 
    })
    setTask(updatedTask); 
  }
  return (
    <div className='inputContainer'>
      <div><input className='entry' value={userInput} onChange={(e) => setUserInput(e.target.value)} /> </div>
      {/*capture userValue with value ={userInput}, update state with onClick */}
      <div>
        <button className='addTask' onClick={handleAddTask}> Add Task </button>  </div>
      <ul>
        {task.map((items, index) => {
          return <li key={index}>{items.text}
          <button onClick={() => handleComplete(index)} className='completeBt'> Complete </button>
            <button onClick={() => handleDelete(index)} className='deleteBtn'> Delete</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default App
