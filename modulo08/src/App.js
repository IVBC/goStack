import React, { useState, useEffect } from 'react';

function App() {
    const [tech, setTech] = useState(['ReactJs', 'Angular', 'Java']);
    const [newTech, setNewTech] = useState('');

    function handleAdd() {
        setTech([...tech, newTech]);
        setNewTech('');
    }

    useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
    }, [tech]);

    return (
        <div className="App">
            <>
                <ul>
                    {tech.map(t => (
                        <li key={t}> {t} </li>
                    ))}
                </ul>
                <input
                    value={newTech}
                    onChange={e => setNewTech(e.target.value)}
                />
                <button type="button" onClick={handleAdd}>
                    adicionar
                </button>
            </>
        </div>
    );
}

export default App;
