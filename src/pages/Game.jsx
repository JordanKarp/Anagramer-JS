/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import GameContext from "../context/Context.jsx";
import TargetHeader from  "../components/TargetHeader.jsx"
import '../App.css'
import getFreebieWord from '../data/getFreebieWord.js';
import compareArrays from '../utils/compareArrays.js';
import GameLogs from '../components/GameLogs.jsx';
import GameGuess from '../components/GameGuess.jsx';
import GameWordsFound from '../components/GameWordsFound.jsx';
import GameCorner from '../components/GameCorner.jsx';


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

  const activateFreebie = () => {
    if (user.freebies >= 1 ) {
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
    return logMessage
  }

  const guessWord = (e) => {
    e.preventDefault()
    let guessObj = {guess:guessRef.current.value}
    let {guess} = guessObj
    guess = guess.toLowerCase().trim()
    if (guess === '' || anagrams === []) {
      return
    }

    let logMessage = ''
    guessRef.current.value = ''

    // Already Guessed
           if ( wordsFound.includes(guess)) {
      logMessage = `${guess.toUpperCase()} is already in your vocab.`
      setGuessStats((prev) => {return ({...prev,
        'total': prev.total + 1,
        'repeat': prev.repeat + 1,
      })})

     // Correct Guess
    } else if (anagrams.includes(guess)) {
      setWordsFound((words)=> words.concat(guess))
      logMessage = `${guess.toUpperCase()} has been added.`
      setGuessStats((prev) => {return ({...prev,
        'total': prev.total + 1,
        'correct': prev.correct + 1,
      })})

    // Freebie
    } else if (guess === 'f') {
      logMessage = activateFreebie()
      console.log(logMessage)

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
    let gameMsg = ''
    let gameMult = 0
    if (user.roundWin <= ((wordsFound.length/anagrams.length)*100)) {
      gameMsg = 'You win!'
      gameMult = mult
    } else{
      gameMsg = "You lose."
      gameMult = 0
    }
    navigate("/results", {state: {wordsFound, mult:gameMult, guessStats, msg:gameMsg}})
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
    <div className='gameBoard'>
      <TargetHeader target={target.toUpperCase()} />
      <GameCorner initialTime={time} gameOver={gameOver} wordsFound={wordsFound.length.toString()} totalWords={anagrams.length} winType={user.roundWin} />
      <GameGuess guessWord={guessWord} guessRef={guessRef} />
      <GameLogs logs={logs} />
      <GameWordsFound anagrams={anagrams} wordsFound={wordsFound} userVocab={[...user.vocab]} />
    </div>
     )
}

export default Game
