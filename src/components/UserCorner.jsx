import { useNavigate } from "react-router-dom"
import formatNumber from "../utils/formatNumber"


const UserCorner = ({user}) => {
    const {userName, points, freebies, guessStats, vocab} = user
    const navigate = useNavigate()

    if (user === undefined) {
      return
    } 

    return (
        <button className='userCorner' onClick={() => navigate('/user')}>
            <p><b>{userName}</b></p>
            <p>Points: {formatNumber(points)} </p>
            <p>Freebies: {freebies} </p>
    
        </button>
    )
}

export default UserCorner