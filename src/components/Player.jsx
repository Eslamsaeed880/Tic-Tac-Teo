import { useState } from 'react';

export default function Player({ symbol, name }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    const 

    handleNameChange = (newName) => {
        setPlayerName(newName);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? 
                    <input 
                        type="text" 
                        value={playerName} 
                        onChange={(e) => handleNameChange(e.target.value)}  
                        autoFocus
                    /> 
                    : 
                    <span>
                        <span className="player-name">{playerName}</span>
                        <span className="player-symbol">{symbol}</span>
                    </span>}
            </span>
            <button onClick={() => setIsEditing(!isEditing)}>edit</button>
        </li>
    );
}