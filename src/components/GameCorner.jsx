import formatNumber from "../utils/formatNumber"
import GameProgressBar from "./GameProgressBar"
import Timer from "./Timer"

const GameCorner = ({initialTime, gameOver, wordsFound, totalWords, winType,}) => {

    return (
        <div className='gameCorner'>
            <Timer initialTime={initialTime} gameOver={gameOver}/>
            <p>{wordsFound} / {totalWords} = {formatNumber(wordsFound/totalWords)}%</p>
            <p>Need {winType}%</p>
            <GameProgressBar value={wordsFound} max={totalWords}/>
        </div>
    )
}

export default GameCorner