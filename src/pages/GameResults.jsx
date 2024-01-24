
import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'
import GameResultsTable from '../components/GameResultsTable.jsx'
import GuessStatsBoard from '../components/GuessStatsBoard'
import GameContext from '../context/Context'
import UserCorner from '../components/UserCorner'

function GameResults() {
  const [user, setUser] = useContext(GameContext)
  const location = useLocation()
  const [wordsFound, setWordsFound] = useState()
  const [mult, setMult] = useState(1)
  const [points, setPoints] = useState(0)
  const [msg, setMsg] = useState('')
  const [stats, setStats] = useState()
  const navigate = useNavigate()

  const totalPoints = (wordsFound, mult) => {
    let total = 0;
    for (let i=0; i<wordsFound.length; i++){
        total += wordsFound[i].length
    }
    return total * mult
  }
  const addWords = () => {
    let {vocab} = user
    if (wordsFound !== undefined) {
      for (let word of wordsFound){
        vocab.add(word)
      }
    }
    return vocab
  }

  const addStats = () => {
    let {guessStats} = user
    if (guessStats !== undefined) {
      for (let field in stats){
      guessStats[field] += stats[field]
      }
    }
    return guessStats
  }

  useEffect(() => {
    setWordsFound(location.state.wordsFound)
    setMult(location.state.mult)
    setMsg(location.state.msg)
    setStats(location.state.guessStats)
    setPoints(totalPoints(location.state.wordsFound, location.state.mult))
  }, [location])

  useEffect(() => {
    let updatedVocab = addWords()
    let updatedStats = addStats()
    switch (msg) {
      case 'You win!':
        setUser({
          ...user,
          'vocab': updatedVocab,
          'points': user.points + points,
          'guessStats': updatedStats,
          'roundsPlayed': user.roundsPlayed + 1,
        })
        break
      case 'You lose.':
        setUser({
          ...user,
          'vocab': updatedVocab,
          'points': 0,
          'guessStats': updatedStats,
          'roundsPlayed': user.roundsPlayed + 1,
        })
        break
    }
  },  [msg, wordsFound, stats])



  return (
    <>
      <UserCorner user={user} />
      <h1>{msg}</h1>
      <p>You learned {wordsFound && wordsFound.join(', ').toUpperCase()}</p>
      <GameResultsTable wordsFound={wordsFound} mult={mult} points={points} />
      <button onClick={() => navigate('/setup')} autoFocus>Proceed!</button>
    </>
     )
}

export default GameResults
