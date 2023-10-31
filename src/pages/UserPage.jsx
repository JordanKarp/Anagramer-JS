import { useContext, useEffect } from 'react'
import '../App.css'
import GameContext from '../context/Context'
import GuessStatsBoard from '../components/GuessStatsBoard'


function UserPage() {
  const [user, setUser] = useContext(GameContext)

  if (user === undefined) {
    return
  } 

  useEffect(() => {
    console.log(user.vocab)
  }, [user])
  
  return (
    <>
      <h1>User Info</h1>
      <h2>{user.userName}</h2>
      <h3>Points: {user.points}</h3>
      <h3>Freebies: {user.freebies}</h3>
      <hr/>
      <h3>Words found:</h3>
      <ul>
        <li>2 Letter Words: __% (XXX found)</li>
        <li>3 Letter Words: __% (XXX found)</li>
        <li>4 Letter Words: __% (XXX found)</li>
        <li>5 Letter Words: __% (XXX found)</li>
      </ul>
      <hr/>
      <GuessStatsBoard guessStats={user.guessStats} />
      <a href="javascript:history.back()">Go Back</a>

    </>
     )
}

export default UserPage
