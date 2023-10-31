import { useContext, useEffect } from 'react'
import '../App.css'
import GameContext from '../context/Context'
import GuessStatsBoard from '../components/GuessStatsBoard'


function UserPage() {
  const [user, setUser] = useContext(GameContext)
  const vocabNumbers = {}

  if (user === undefined) {
    return
  } 

  useEffect(() => {
    user.vocab.forEach((word) =>{
      console.log(word.length)
      console.log(word)
      console.log(vocabNumbers[word.length])

      if (vocabNumbers[word.length]=== undefined) {
        vocabNumbers[word.length] = 1
      } else {
        vocabNumbers[word.length] ++
      }
    })
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
        <li>2 Letter Words: __% ({vocabNumbers[2] || 0} found)</li>
        <li>3 Letter Words: __% ({vocabNumbers[3] || 0} found)</li>
        <li>4 Letter Words: __% ({vocabNumbers[4] || 0} found)</li>
        <li>5 Letter Words: __% ({vocabNumbers[5] || 0} found)</li>
      </ul>
      <hr/>
      <GuessStatsBoard guessStats={user.guessStats} />
      <a href="javascript:history.back()">Go Back</a>

    </>
     )
}

export default UserPage
