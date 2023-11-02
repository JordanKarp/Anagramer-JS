import formatNumber from "../utils/formatNumber"
import formatPercent from "../utils/formatPercent"

const GameResultsTable = ({wordsFound, mult, points}) => {
    const wordRow = (word) => {
        return (
            <tr key={word}>
                <td>{word}</td>
                <td>{word.length}</td>
                <td>*</td>
                <td>{mult}</td>
                <td>=</td>
                <td>{formatPercent(word.length * mult)}</td>
            </tr>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Length</th>
                    <th></th>
                    <th>Multiplier</th>
                    <th></th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {wordsFound && wordsFound.map((word) => wordRow(word))}
                <tr>
                    <td colSpan='6'>
                        <hr size='1px' color='black'/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{formatNumber(points)} points</td>
                </tr>
            </tbody>
        </table>
    )
}

export default GameResultsTable