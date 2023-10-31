// import { useState } from 'react'
import { useContext } from 'react'
import '../App.css'
import GameContext from '../context/Context'


function UserPage() {
  const [user, setUser] = useContext(GameContext)
  
  if (user === undefined) {
    return
  } 
  return (
    <>
      <h1>User Info</h1>
      <h2>${user.username}</h2>
      <h3>${user.points}</h3>
      <h3>${user.freebies}</h3>
      <GuessStatsBoard guessStats={user.guessStats} />
    </>
     )
}

export default UserPage
