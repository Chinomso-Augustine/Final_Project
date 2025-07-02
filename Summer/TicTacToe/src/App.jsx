import { useState } from 'react'
import './App.css'
import './index.css';



//fun to set the squares
function Square({ value }) {
  return <button className="square">{value}</button>
}

      export default function Board() {
  /*Creating useStates to monitor states of each square */
const [squares, setSquares] = useState(Array(9).fill(null)); {/*Created an array that holds 9 elem and keep them empty */}
      return (
      <>
        <div className='board-row'>
          < Square value={squares[0]} />
          < Square value={squares[1]} />
          < Square value={squares[2]} />
        </div>

        <div className='board-row'>
          < Square value={squares[3]} />
          < Square value={squares[4]} />
          < Square value={squares[5]} />
        </div>

        <div className='board-row'>
          < Square value={squares[6]} />
          < Square value={squares[7]} />
          < Square value={squares[8]} />
        </div>
      </>
      );
}

