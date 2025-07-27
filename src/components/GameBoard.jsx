import { useState } from 'react';


export default function GameBoard({ onSelectSquare, board }) {


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleCellClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard];
    //         newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((cell, colIndex) => (
                                <li key={colIndex}>
                                    <button 
                                        onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                        disabled={cell !== null}
                                    >
                                        {cell}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
}
