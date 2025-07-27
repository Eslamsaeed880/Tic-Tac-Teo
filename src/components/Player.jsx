import { useState } from 'react';

export default function Player({ symbol, name, isActive }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    const handleNameChange = (newName) => {
        setPlayerName(newName);
    }

    const handleEdit = () => {
        setIsEditing(editing => !editing);
    }

    let playerNameSection = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        playerNameSection = (
            <input 
                type="text" 
                value={playerName} 
                onChange={(e) => handleNameChange(e.target.value)}  
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleEdit();
                    }
                }}
                autoFocus
            />
        );
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {playerNameSection}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}