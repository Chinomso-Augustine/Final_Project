import { useState } from 'react'
import './App.css'
import './index.css';



//fun to change value fo each square
function Square() {
  //using useState to remember when btn is clicked
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X'); {/*Changes value to X */}
  }
  return (
    <button
      className='square'
      onClick={handleClick}>
      {value}
    </button>)

}

export default function Board() {
  return (
    <>
      <div className='board-row'>
        < Square />
        < Square />
        < Square />
      </div>

      <div className='board-row'>
        < Square />
        < Square />
        < Square />
      </div>

      <div className='board-row'>
        < Square />
        < Square />
        < Square />
      </div>
    </>
  );
}

