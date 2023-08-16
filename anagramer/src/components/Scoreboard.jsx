import { useContext } from "react"
import GameContext from "../context/Context"

const Scoreboard = () => {
    const [game, ] =  useContext(GameContext)
    return (
        <div className='scoreboard'>
            <p>Total Guesses: {game.guessTotal}</p>
            <p>Correct: {game.guessCorrect}</p>
            <p>Incorrect: {game.guessIncorrect}</p>
            <p>Repeat: {game.guessRepeat}</p>
            <p>Freebie: {game.guessFreebies}</p>
        </div>
    )
}

export default Scoreboard