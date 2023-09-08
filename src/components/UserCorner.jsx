import formatNumber from "../utils/formatNumber"

const UserCorner = ({user}) => {
    const {userName, points, freebies, guessStats} = user

    if (user === undefined) {
      return
    }

    
    return (
        <div className='userCorner'>
            <p><b>{userName}</b></p>
            <p>Points: {formatNumber(points)} </p>
            <p>Freebies: {freebies} </p>
            {/* <p>Total Guesses: {guessStats.total}</p>
            <p>Correct Guesses: {guessStats.correct}</p>
            <p>Incorrect Guesses: {guessStats.incorrect}</p>
            <p>Repeat Guesses: {guessStats.repeat}</p>
            <p>Freebie Guesses: {guessStats.freebies}</p> */}
        </div>
    )
}

export default UserCorner