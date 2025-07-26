import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleCellClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard];
            newGameBoard[rowIndex][colIndex] = 'X';
            return newGameBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((cell, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => handleCellClick(rowIndex, colIndex)}>{cell}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
}
