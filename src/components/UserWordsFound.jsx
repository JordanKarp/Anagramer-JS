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
          <tr>
            <td>3</td>
            <td>{formatPercent(vocabNumbers[3] / dictNumbers[3])}%</td>
            <td><progress value={vocabNumbers[3]} max={dictNumbers[3]}></progress></td>
            <td>{vocabNumbers[3] || 0} / {dictNumbers[3]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{formatPercent(vocabNumbers[4] / dictNumbers[4])}%</td>
            <td><progress value={vocabNumbers[4]} max={dictNumbers[4]}></progress></td>
            <td>{vocabNumbers[4] || 0} / {dictNumbers[4]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{formatPercent(vocabNumbers[5] / dictNumbers[5])}%</td>
            <td><progress value={vocabNumbers[5]} max={dictNumbers[5]}></progress></td>
            <td>{vocabNumbers[5] || 0} / {dictNumbers[5]}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{formatPercent(vocabNumbers[6] / dictNumbers[6])}%</td>
            <td><progress value={vocabNumbers[6]} max={dictNumbers[6]}></progress></td>
            <td>{vocabNumbers[6] || 0} / {dictNumbers[6]}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{formatPercent(vocabNumbers[7] / dictNumbers[7])}%</td>
            <td><progress value={vocabNumbers[7]} max={dictNumbers[7]}></progress></td>
            <td>{vocabNumbers[7] || 0} / {dictNumbers[7]}</td>
          </tr>
        </tbody>
      </table>
    )
}

export default UserWordsFound