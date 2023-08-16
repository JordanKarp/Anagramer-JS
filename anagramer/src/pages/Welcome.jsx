import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import GameContext from "../context/Context.jsx";

function Welcome() {
  const [user, setUser] = useContext(GameContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  const proceed = (e) => {
    e.preventDefault()
      // Send the login data to your server

    if (e.nativeEvent.submitter.value === 'signIn') {
      setMsg('signIn')
    } else {
      setMsg('register')
    }
    // console.log(JSON.stringify(user));
    navigate('/Setup')
  }

  useEffect(() => {
    setUser({
      ...user,
      'userName': userName
    });
  }, [userName])

  return (
    <>
      <h1 className="title">Anagrammer</h1>
      <div className="signIn">
        <form onSubmit={proceed} autoComplete="off">
          <div>
            <label htmlFor="userName">User Name:</label>
            <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='userName' />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*****'/>
           </div>
           <div>
            <button type='submit' name='signIn' value="signIn">Sign In</button>
            <button type='submit' name='register' value="register">Register</button>
           </div>
        </form>
        <div>
          
        </div>
        {msg && <p className="loginMsg">{msg}</p>}
      </div>


      {/* <a href="setup">Play a round! </a> */}
      {/* <Link to="/setup">Play round!</Link> */}
    </>
  )
}

export default Welcome;
