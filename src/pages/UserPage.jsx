import { useContext, useEffect, useState } from 'react'
import '../App.css'
import GameContext from '../context/Context'
import GuessStatsBoard from '../components/GuessStatsBoard'
import data from "../../data/wordListDict-short.json"
import formatPercent from '../utils/formatPercent'
import formatNumber from '../utils/formatNumber'
import GameProgressBar from '../components/GameProgressBar'
import UserWordsFoundData from '../components/UserWordsFound'



function UserPage() {
  const [user, setUser] = useContext(GameContext)
  const [dictNumbers, setDictNumbers] = useState({})
  const [vocabNumbers, setVocabNumbers] = useState({})

  if (user === undefined) {
    return
  }
  // Count the number of words found for each word length
  useEffect(() => {
    setVocabNumbers([...user.vocab].reduce((acc,v)=>{
      acc[v.length] = acc[v.length] ? acc[v.length]+ 1 : 1;
      return acc;
    },{}));
  }, [user])

  // Count the total number of words for each word length
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
      <h3>Rounds Played: {user.roundsPlayed}</h3>
      <h3>Points: {formatNumber(user.points)}</h3>
      <h3>Words Found: {user.vocab.size}</h3>
      <h3>Freebies: {user.freebies}</h3>
      <hr/>
      <UserWordsFoundData vocabNumbers={vocabNumbers} dictNumbers={dictNumbers} totalFound={user.vocab.size}/>
      <hr/>
      <GuessStatsBoard guessStats={user.guessStats} />
      <a href="javascript:history.back()">Go Back</a>

    </>
     )
}

export default UserPage
