import formatNumber from "../utils/formatNumber"
import GuessStatsBoard from "./GuessStatsBoard"

const UserCorner = ({user}) => {
    const {userName, points, freebies, guessStats, vocab} = user

    if (user === undefined) {
      return
    } 

    return (
        <div className='userCorner'>
            <p><b>{userName}</b></p>
            <p>Points: {formatNumber(points)} </p>
            <p>Freebies: {freebies} </p>
            <GuessStatsBoard guessStats={guessStats} />
        </div>
    )
}

export default UserCorner