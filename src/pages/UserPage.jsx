// import { useState } from 'react'
import { useContext, useEffect } from 'react'
import '../App.css'
import GameContext from '../context/Context'
import GuessStatsBoard from '../components/GuessStatsBoard'


function UserPage() {
  const [user, setUser] = useContext(GameContext)

  if (user === undefined) {
    return
  } 
  
  return (
    <>
      <h1>User Info</h1>
      <h2>{user.username}</h2>
      <h3>Points: {user.points}</h3>
      <h3>Freebies: {user.freebies}</h3>
      <GuessStatsBoard guessStats={user.guessStats} />
    </>
     )
}

export default UserPage
