import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import GameContext from "../context/Context.jsx";
import { calcMult, calcTotalMult } from "../data/mutlipliers.js";
import { getTime, formatTime } from "../data/time.js";
import '../App.css'
import shuffleStr from '../utils/shuffleStr.js';
import choice from '../utils/choice.js';
import getCombinations from '../utils/getCombinations.js';
import UserCorner from '../components/UserCorner.jsx';
import formatNumber from '../utils/formatNumber.js';
import GameSetupTable from '../components/GameSetupTable.jsx';
import GameSetupForm from '../components/GameSetupForm.jsx';
import GameStore from '../components/GameStore.jsx';
import useFetch from '../hooks/useFetch.js';


function GameSetup() {
  const [user, setUser] = useContext(GameContext)
  const [allWords, setAllWords] = useState()
  const [size, setSize] = useState(3)
  const [timeType, setTimeType] = useState('Normal')
  const [time, setTime] = useState()
  const [winType, setWinType] = useState('100')
  const navigate = useNavigate()

  // const getWords = async () => {
  //   await fetch("../../data/wordListDict-short.json", {
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }})
  //     .then((response) => {
  //       if (response.ok) { 
  //         return response.json();
  //       }
  //       return Promise.reject(response); 
  //     })
  //     .then((result) => { 
  //       setAllWords(result)
  //     })
  //     .catch((error) => {
  //       console.log('Something went wrong.', error); 
  //     });
  // };

  const getWords = () => {
    const [all, errorStatus] = useFetch("../../data/wordListDict-short.json")
    console.log("error status:", errorStatus)
    // setAllWords(all)
  }

  const getTarget = (words) => {
    const allWordsList = Object.values(words).flat(1)
    return shuffleStr(choice(allWordsList, size))

  }
  const getAnagrams = (words, target) => {
    let anagramList = []
    if (target) {
      const permutations = getCombinations(target)
      permutations.map((subString) => {
        if ((subString in words) && !(words[subString] in anagramList)) {
          anagramList.push(words[subString])
        }
      })
      anagramList = anagramList.flat()
      // anagrams.sort((a, b) => b.length - a.length)
      anagramList.sort()
      return anagramList
    } else {
      console.log('no target')
    }
  }

  const proceed = () => {
    const target = getTarget(allWords)
    const anagrams = getAnagrams(allWords, target)
    const mult = calcTotalMult(size,timeType,winType)
    setUser({
      ...user,
      'roundSize': size,
      'roundTime': timeType,
      'roundWin': winType,
    })
    console.log(user)
    navigate('/play', {state: {anagrams, target, time, mult}})
  }



  useEffect(() => {
    getWords()
  }, [])

  useEffect(() => {
    setTime(getTime(timeType, size))
  }, [timeType, size])

  return (
    <>
      <h1>Game Setup</h1>
      <UserCorner user={user}/>
      <GameSetupForm user={user} size={size} setSize={setSize} setWinType={setWinType} setTimeType={setTimeType} />
      <hr/>
      <GameStore user={user} setUser={setUser}/>
      <hr/>
      <GameSetupTable size={size} timeType={timeType} winType={winType} time={time} freebies={user.freebies} />
      <button onClick={proceed} autoFocus>Play!</button>
    </>
    )
}

export default GameSetup
