/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import GameContext from "../context/Context.jsx";
import Timer from  "../components/Timer.jsx"
import TargetHeader from  "../components/TargetHeader.jsx"
import '../App.css'
import getFreebieWord from '../data/getFreebieWord.js';
import compareArrays from '../utils/compareArrays.js';
import GuessStatsBoard from '../components/GuessStatsBoard.jsx';
import UserCorner from '../components/UserCorner.jsx';
import GameLogs from '../components/GameLogs.jsx';
import GameGuess from '../components/GameGuess.jsx';
import GameWordsFound from '../components/GameWordsFound.jsx';
import GameProgressBar from '../components/GameProgressBar.jsx';

function Game() {
  const guessRef = useRef()
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useContext(GameContext)
  const [time, setTime] = useState()
  const [mult, setMult] = useState()
  const [anagrams, setAnagrams] = useState([])
  const [wordsFound, setWordsFound] = useState([])
  const [target, setTarget] = useState('')
  const [logs, setLogs] = useState([])
  const [guessStats, setGuessStats] = useState({
    'total': 0,
    'correct': 0,
    'incorrect': 0,
    'repeat': 0,
    'freebies': 0,
  })

  const navigate = useNavigate('')
  const location = useLocation()

  const guessWord = (e) => {
    e.preventDefault()
    let guessObj = {guess:guessRef.current.value}
    let {guess} = guessObj
    guess = guess.toLowerCase().trim()
    if (guess === '' || anagrams === []) {
      return
    }
    // let userVocab = [...user.vocab]

    let logMessage = ''
    guessRef.current.value = ''

    // Already Guessed
    // if (userVocab.includes(guess) || wordsFound.includes(guess)) {
    if ( wordsFound.includes(guess)) {
      logMessage = `${guess.toUpperCase()} is already in your vocab.`
      setGuessStats((prev) => {return ({...prev,
        'total': prev.total + 1,
        'repeat': prev.repeat + 1,
      })})

     // Correct Guess
    } else if (anagrams.includes(guess)) {
      // addToVocab(guess)
      setWordsFound((words)=> words.concat(guess))
      logMessage = `${guess.toUpperCase()} has been added.`
      setGuessStats((prev) => {return ({...prev,
        'total': prev.total + 1,
        'correct': prev.correct + 1,
      })})

    // Freebie
    } else if (guess === 'f') {
      if (user.freebies >= 1 ) {
        // TODO: add Freebies
        let freebieWord = getFreebieWord(anagrams, wordsFound)
        setWordsFound((words)=> words.concat(freebieWord))
        setUser((prev) => {return ({...prev,
          'freebies': prev.freebies - 1
        })})
        logMessage = 'Freebie used.'
        setGuessStats((prev) => {return ({...prev,
          'total': prev.total + 1,
          'freebies': prev.freebies + 1,
        })})
      } else {
        logMessage = "No Freebies available."
      }


    // Incorrect Guess
      } else {
        logMessage = `${guess.toUpperCase()} is incorrect.`
        setGuessStats((prev) => {return ({...prev,
          'total': prev.total + 1,
          'incorrect': prev.incorrect + 1,
        })})

    }
    setLogs(currentLog => [logMessage, ...currentLog])
  }

  const gameOver = () => {
    navigate("/results", {state: {wordsFound, mult:0, guessStats,  msg:'You win!'}})
    console.log('Game Over')
  }


  // Load game settings
  useEffect(() => {
    setTarget(location.state.target)
    setAnagrams(location.state.anagrams)
    setTime(location.state.time)
    setMult(location.state.mult)
  }, [location])

  // Start Game
  useEffect(() => {
    setLoading(false)
  }, [time, target, anagrams])

  // Add vocab words to words found
  useEffect(() => {
    user.vocab.forEach((word) => {
      if (anagrams.includes(word)) {
        wordsFound.push(word)
      }
    })
  }, [anagrams]);

  // If you've guessed all the words, end
  useEffect(() => {
    if (anagrams.length !== 0 && compareArrays(anagrams, wordsFound)){
      setLogs(currentLog => ["Early win!", ...currentLog])
      navigate('/results', {state: {wordsFound, mult, guessStats,  msg:'You win!'}})
    }
  }, [anagrams, wordsFound])


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <TargetHeader target={target.toUpperCase()} />
      <UserCorner user={user} />
      <Timer initialTime={time} gameOver={gameOver} />
      <GuessStatsBoard  guessStats={guessStats} />
      <GameProgressBar value={wordsFound.length.toString()} max={anagrams.length} />
      {/* <progress className="progressBar" value={wordsFound.length.toString()} max={anagrams.length}></progress> */}
      <GameWordsFound anagrams={anagrams} wordsFound={wordsFound} userVocab={[...user.vocab]} />
      <GameGuess guessWord={guessWord} guessRef={guessRef} />
      <GameLogs logs={logs} />
    </>
     )
}

export default Game