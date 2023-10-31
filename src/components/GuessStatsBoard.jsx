import formatNumber from "../utils/formatNumber"

const GuessStatsBoard = ({guessStats}) => {
    let strictAcc = formatNumber(100 * guessStats.correct / guessStats.total) || 0
    let acc = formatNumber(100 * guessStats.correct / (guessStats.total - guessStats.repeat - guessStats.freebies)) || 0

    return (
        <div className='guessStatsBoard'>
            <h3>Guesses: </h3>
            <table>
                <tr>
                    <td>Total:</td>
                    <td>{guessStats.total}</td>
                </tr>
                <tr>
                    <td>Correct:</td>
                    <td>{guessStats.correct}</td>
                </tr>
                <tr>
                    <td>Incorrect:</td>
                    <td>{guessStats.incorrect}</td>
                </tr>
                <tr>
                    <td>Repeat:</td>
                    <td>{guessStats.repeat}</td>
                </tr>
                <tr>
                    <td>Freebies:</td>
                    <td>{guessStats.freebies}</td>
                </tr>
                <tr>
                    <td>Accuracy:</td>
                    <td>{acc}%</td>
                </tr>
                <tr>
                    <td>Strict Accuracy:</td>
                    <td>{strictAcc}%</td>
                </tr>
            </table>
        </div>
    )
}

export default GuessStatsBoard