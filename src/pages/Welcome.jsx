import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import GameContext from "../context/Context.jsx";

function Welcome() {
  const [user, setUser] = useContext(GameContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  const randUserName = (e) => {
      return "NewUser"
  }

  const proceed = (e) => {
    e.preventDefault()
      // Send the login data to your server

    if (e.nativeEvent.submitter.value === 'play') {
      setMsg('play')
    navigate('/setup')
  }
  //   if (e.nativeEvent.submitter.value === 'signIn') {
  //     setMsg('signIn')
  //   } else {
  //     setMsg('register')
  //   }
  //   navigate('/Setup')
  // }

  useEffect(() => {
    setUser({
      ...user,
      'userName': userName
    });
  }, [userName])

  return (
    <>
      <h1 className="title">Anagramer</h1>
      <h2 className="explaination">Create every word possible out of the given letters</h2>
      <h3 className="explaination">Get 75% of all the words to proceed (100% for a bonus!)</h3>
      <h3 className="explaination">Each word is 'learned' and will never need repeating - build your vocabulary!</h3>
      <div className="signIn">
        <form onSubmit={proceed} autoComplete="off">
          <div>
            <label htmlFor="userName">Name:</label>
            <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='userName' />
          </div>
  
          <div>
          <button type='submit' name='play' value="play" formAction="/login">Play</button>
          </div>
        </form>
        {/* <form onSubmit={proceed} autoComplete="off">
          <div>
            <label htmlFor="userName">User Name:</label>
            <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='userName' />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*****'/>
           </div>
           <div>
            <button type='submit' name='signIn' value="signIn" formAction="/login">Sign In</button>
            <button type='submit' name='register' value="register"formAction="/register">Register</button>
           </div>
        </form> */}
        {msg && <p className="loginMsg">{msg}</p>}
      </div>
    </>
  )
}
}
export default Welcome;
