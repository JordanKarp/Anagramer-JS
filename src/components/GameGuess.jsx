import '../App.css'

function GameGuess( {guessWord, guessRef} ) {

    return (
        <form onSubmit={guessWord} autoComplete='off' className='gameGuess'>
            <input
                ref= {guessRef}
                type="text"
                size="10"
                autoFocus
            />
        </form>
     )
}

export default GameGuess