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
        </div>
    )
}

export default UserCorner