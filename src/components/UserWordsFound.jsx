// import { calcMult, calcTotalMult } from "../data/mutlipliers"
// import { formatTime } from "../data/time"
// import formatNumber from "../utils/formatNumber"
import formatPercent from "../utils/formatPercent"

const UserWordsFound = ({vocabNumbers, dictNumbers}) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Size</th>
            <th>Percent</th>
            <th>Progress</th>
            <th>Totals</th>
          </tr>
          <tr>
            <td>2</td>
            <td>{formatPercent(vocabNumbers[2] / dictNumbers[2])}%</td>
            <td><progress value={vocabNumbers[2]} max={dictNumbers[2]}></progress></td>
            <td>{vocabNumbers[2] || 0} / {dictNumbers[2]}</td>
          </tr>
        </tbody>
      </table>
    )
}

export default UserWordsFound