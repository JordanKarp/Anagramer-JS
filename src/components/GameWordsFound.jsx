import '../App.css'

function GameWordsFound( {anagrams, wordsFound, userVocab} ) {

    return (
        <ul className="gameWordsFound">
            {anagrams && anagrams.map((word) => {
                let val = userVocab.includes(word)|| wordsFound.includes(word) ? word : '-'.repeat(word.length)
                return <li className="word" key={crypto.randomUUID()}>{val}</li>
            })}
        </ul>
     )
}

export default GameWordsFound