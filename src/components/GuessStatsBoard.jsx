import formatNumber from "../utils/formatNumber"

const GuessStatsBoard = ({guessStats}) => {
    let strictAcc = formatNumber(100 * guessStats.correct / guessStats.total) || 0
    let acc = formatNumber(100 * guessStats.correct / (guessStats.total - guessStats.repeat - guessStats.freebies)) || 0

    return (
        <div className='guessStatsBoard'>
            <p>Total Guesses: {guessStats.total}</p>
            <p>Correct: {guessStats.correct}</p>
            <p>Incorrect: {guessStats.incorrect}</p>
            <p>Repeat: {guessStats.repeat}</p>
            <p>Freebie: {guessStats.freebies}</p>
            <p>Accuracy: {acc}% ({strictAcc}%)</p>
        </div>
    )
}

export default GuessStatsBoard