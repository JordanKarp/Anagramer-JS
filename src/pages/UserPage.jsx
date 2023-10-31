import { useContext, useEffect, useState } from 'react'
import '../App.css'
import GameContext from '../context/Context'
import GuessStatsBoard from '../components/GuessStatsBoard'
import data from "../../data/wordListDict-short.json"
import formatNumber from '../utils/formatNumber'



function UserPage() {
  const [user, setUser] = useContext(GameContext)
  const [dictNumbers, setDictNumbers] = useState({})
  const [vocabNumbers, setVocabNumbers] = useState({})

  if (user === undefined) {
    return
  } 

  useEffect(() => {
    setVocabNumbers([...user.vocab].reduce((acc,v)=>{
      acc[v.length] = acc[v.length] ? acc[v.length]+ 1 : 1;
      return acc;
    },{}))
  }, [user])

  useEffect(() => {
    setDictNumbers(Object.values(data).flat(1).reduce((acc,v)=>{
      acc[v.length] = acc[v.length] ? acc[v.length]+ 1 : 1;
      return acc;
    },{}))
  }, [])

  return (
    <>
      <h1>User Info</h1>
      <h2>{user.userName}</h2>
      <h3>Points: {formatNumber(user.points)}</h3>
      <h3>Freebies: {user.freebies}</h3>
      <hr/>
      <h3>Words found:</h3>
      <ul>
        <li>2 Letter Words: {formatNumber(vocabNumbers[2] / dictNumbers[2]) || 0}% ({vocabNumbers[2] || 0} found)</li>
        <li>3 Letter Words: {formatNumber(vocabNumbers[3] / dictNumbers[3]) || 0}% ({vocabNumbers[3] || 0} found)</li>
        <li>4 Letter Words: {formatNumber(vocabNumbers[4] / dictNumbers[4]) || 0}% ({vocabNumbers[4] || 0} found)</li>
        <li>5 Letter Words: {formatNumber(vocabNumbers[5] / dictNumbers[5]) || 0}% ({vocabNumbers[5] || 0} found)</li>
        <li>6 Letter Words: {formatNumber(vocabNumbers[6] / dictNumbers[6]) || 0}% ({vocabNumbers[6] || 0} found)</li>
        <li>7 Letter Words: {formatNumber(vocabNumbers[7] / dictNumbers[7]) || 0}% ({vocabNumbers[7] || 0} found)</li>
      </ul>
      <hr/>
      <GuessStatsBoard guessStats={user.guessStats} />
      <a href="javascript:history.back()">Go Back</a>

    </>
     )
}

export default UserPage
