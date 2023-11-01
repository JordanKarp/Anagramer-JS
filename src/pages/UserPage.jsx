import { useContext, useEffect, useState } from 'react'
import '../App.css'
import GameContext from '../context/Context'
import GuessStatsBoard from '../components/GuessStatsBoard'
import data from "../../data/wordListDict-short.json"
import formatPercent from '../utils/formatPercent'
import formatNumber from '../utils/formatNumber'
import GameProgressBar from '../components/GameProgressBar'
import UserWordsFound from '../components/UserWordsFound'



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
      <h3>Rounds Played: {user.roundsPlayed}</h3>
      <h3>Points: {formatNumber(user.points)}</h3>
      <h3>Freebies: {user.freebies}</h3>
      <hr/>
      <UserWordsFound vocabNumbers={vocabNumbers} dictNumbers={dictNumbers}/>
      {/* <h3>Words found:</h3>
      <ul>
        <li>2 Letter Words: {formatPercent(vocabNumbers[2] / dictNumbers[2])}% ({vocabNumbers[2] || 0} / {dictNumbers[2]})</li>
        <progress value={formatNumber(vocabNumbers[2])} max={formatNumber(dictNumbers[2])}></progress>
        <li>3 Letter Words: {formatPercent(vocabNumbers[3] / dictNumbers[3])}% ({vocabNumbers[3] || 0} / {dictNumbers[3]})</li>
        <li>4 Letter Words: {formatPercent(vocabNumbers[4] / dictNumbers[4])}% ({vocabNumbers[4] || 0} / {dictNumbers[4]})</li>
        <li>5 Letter Words: {formatPercent(vocabNumbers[5] / dictNumbers[5])}% ({vocabNumbers[5] || 0} / {dictNumbers[5]})</li>
        <li>6 Letter Words: {formatPercent(vocabNumbers[6] / dictNumbers[6])}% ({vocabNumbers[6] || 0} / {dictNumbers[6]})</li>
        <li>7 Letter Words: {formatPercent(vocabNumbers[7] / dictNumbers[7])}% ({vocabNumbers[7] || 0} / {dictNumbers[7]})</li>
      </ul> */}
      <hr/>
      <GuessStatsBoard guessStats={user.guessStats} />
      <a href="javascript:history.back()">Go Back</a>

    </>
     )
}

export default UserPage
