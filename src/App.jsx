
import { useState } from 'react'
import Router from './Router.jsx'
import GameContext from './context/Context.jsx'
import './App.css'


function App() {
    const [user, setUser] = useState({
        "userName": '',
        "vocab": new Set(),
        "points": 0,
        "freebies": 3,
        // "extraLives": 0,
        "guessStats": {
            'total': 0,
            'correct': 0,
            'incorrect': 0,
            'repeat': 0,
            'freebies': 0,
        },
        'roundSize': '3',
        'roundTime': 'Normal',
        'roundWin': '100',
    })

    return (
        <GameContext.Provider value={[user, setUser]}>
            <Router />
        </GameContext.Provider>
    )
}

export default App