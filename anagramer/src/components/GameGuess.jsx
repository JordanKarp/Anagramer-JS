import '../App.css'

function GameGuess( {guessWord, guessRef} ) {

    return (
        <form onSubmit={guessWord} autoComplete='off' className='gameGuess'>
            <input
                ref= {guessRef}
                type="text"
                id='guessArea'
                placeholder='|'
                autoFocus
            />
        </form>
     )
}

export default GameGuess