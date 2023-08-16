const GuessStatsBoard = ({guessStats}) => {
    return (
        <div className='guessStatsBoard'>
            <p>Total Guesses: {guessStats.total}</p>
            <p>Correct: {guessStats.correct}</p>
            <p>Incorrect: {guessStats.incorrect}</p>
            <p>Repeat: {guessStats.repeat}</p>
            <p>Freebie: {guessStats.freebies}</p>
        </div>
    )
}

export default GuessStatsBoard