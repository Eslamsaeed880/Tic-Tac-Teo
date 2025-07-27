import { useState } from 'react';
import Log from './components/Log.jsx'
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'



function derivedActivePlayer(gameTurns) {
  let currPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O';
  }

  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [currentPlayer, setCurrentPlayer] = useState('X');
  const currentPlayer = derivedActivePlayer(gameTurns);

  function handlePlayerChange(rowIndex, colIndex) {
    // setCurrentPlayer(
    //   (curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X'
    // );
    setGameTurns(prevTurns => {
      const currPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [{
        square: { 
          row: rowIndex, 
          col: colIndex }, 
        player: currPlayer }, 
        ...prevTurns,
      ];

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className="highlight-player">
          <Player symbol='X' name='Player 1' isActive={currentPlayer === 'X'} />
          <Player symbol='O' name='Player 2' isActive={currentPlayer === 'O'} />
        </ol>
        <GameBoard 
        onSelectSquare={handlePlayerChange} 
        turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
