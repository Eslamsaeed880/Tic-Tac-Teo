import { useState } from 'react';
import Log from './components/Log.jsx';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBNATIONS } from './components/winning-combinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function derivedActivePlayer(gameTurns) {
  let currPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O';
  }

  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [currentPlayer, setCurrentPlayer] = useState('X');

  const currentPlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  let winner;

  for(const combination of WINNING_COMBNATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column],
          secondSquareSymbol = gameBoard[combination[1].row][combination[1].column],
          thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if((firstSquareSymbol) &&
     firstSquareSymbol === secondSquareSymbol && 
     secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className="highlight-player">
          <Player symbol='X' name='Player 1' isActive={currentPlayer === 'X'} />
          <Player symbol='O' name='Player 2' isActive={currentPlayer === 'O'} />
        </ol>
        {(hasDraw || winner) && <GameOver winner={winner} onRestart={handleRematch} />}
        <GameBoard 
        onSelectSquare={handlePlayerChange} 
        board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
