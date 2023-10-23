import formatNumber from "../utils/formatNumber"
import GuessStatsBoard from "./GuessStatsBoard"

const UserCorner = ({user}) => {
    const {userName, points, freebies, guessStats, vocab} = user

    if (user === undefined) {
      return
    } 
    const sizes = {}
    const vocabArray = [...vocab];
    vocabArray.forEach((word) => {
        if (sizes[word.length]){
            sizes[word.length] += 1;
        } else {
            sizes[word.length] = 1;
        }
    })

    return (
        <div className='userCorner'>
            <p><b>{userName}</b></p>
            <p>Points: {formatNumber(points)} </p>
            <p>Freebies: {freebies} </p>
            <p>2: {sizes[2]}</p>
            <p>2: {sizes[3]}</p>
            <GuessStatsBoard guessStats={guessStats} />
        </div>
    )
}

export default UserCorner