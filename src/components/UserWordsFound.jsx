import formatPercent from "../utils/formatPercent"


const UserWordsFoundData = ({vocabNumbers, dictNumbers, totalFound}) => {

    return (
      <>
        <table>
          <tbody>
            <tr>
              <th>Color</th>
              <th>Size</th>
              <th>Percent</th>
              <th>Progress</th>
              <th>Totals</th>
            </tr>
            <tr>
              <td><input type="color" defaultValue='#ff0000' disabled/></td>
              <td>2</td>
              <td>{formatPercent(vocabNumbers[2] / dictNumbers[2])}%</td>
              <td><progress value={vocabNumbers[2] || 0} max={dictNumbers[2]}></progress></td>
              <td>{vocabNumbers[2] || 0} / {dictNumbers[2]}</td>
            </tr>
            <tr>
              <td><input type="color" defaultValue='#ffa500' disabled/></td>
              <td>3</td>
              <td>{formatPercent(vocabNumbers[3] / dictNumbers[3])}%</td>
              <td><progress value={vocabNumbers[3] || 0} max={dictNumbers[3]}></progress></td>
              <td>{vocabNumbers[3] || 0} / {dictNumbers[3]}</td>
            </tr>
            <tr>
              <td><input type="color" defaultValue='#ffff00' disabled/></td>
              <td>4</td>
              <td>{formatPercent(vocabNumbers[4] / dictNumbers[4])}%</td>
              <td><progress value={vocabNumbers[4] || 0} max={dictNumbers[4]}></progress></td>
              <td>{vocabNumbers[4] || 0} / {dictNumbers[4]}</td>
            </tr>
            <tr>
              <td><input type="color" defaultValue='#00ff00' disabled/></td>
              <td>5</td>
              <td>{formatPercent(vocabNumbers[5] / dictNumbers[5])}%</td>
              <td><progress value={vocabNumbers[5] || 0} max={dictNumbers[5]}></progress></td>
              <td>{vocabNumbers[5] || 0} / {dictNumbers[5]}</td>
            </tr>
            <tr>
              <td><input type="color" defaultValue='#0000ff' disabled/></td>
              <td>6</td>
              <td>{formatPercent(vocabNumbers[6] / dictNumbers[6])}%</td>
              <td><progress value={vocabNumbers[6] || 0} max={dictNumbers[6]}></progress></td>
              <td>{vocabNumbers[6] || 0} / {dictNumbers[6]}</td>
            </tr>
            <tr>
              <td><input type="color" defaultValue='#800080' disabled/></td>
              <td>7</td>
              <td>{formatPercent(vocabNumbers[7] / dictNumbers[7])}%</td>
              <td><progress value={vocabNumbers[7] || 0} max={dictNumbers[7]}></progress></td>
              <td>{vocabNumbers[7] || 0} / {dictNumbers[7]}</td>
            </tr>
          </tbody>
        </table>
        <div className="pie" style={{
          "--size-2-pct": "" + formatPercent(vocabNumbers[2] / totalFound) + '%',
          "--size-3-pct": "" + formatPercent((vocabNumbers[3] + vocabNumbers[2]) / totalFound) + '%',
          "--size-4-pct": "" + formatPercent((vocabNumbers[4] + vocabNumbers[3] + vocabNumbers[2]) / totalFound) + '%',
          "--size-5-pct": "" + formatPercent((vocabNumbers[5] + vocabNumbers[4] + vocabNumbers[3] + vocabNumbers[2]) / totalFound) + '%',
          "--size-6-pct": "" + formatPercent((vocabNumbers[6] + vocabNumbers[5] + vocabNumbers[4] + vocabNumbers[3] + vocabNumbers[2]) / totalFound) + '%',
          "--size-7-pct": "" + formatPercent((vocabNumbers[7] + vocabNumbers[6] + vocabNumbers[5] + vocabNumbers[4] + vocabNumbers[3] + vocabNumbers[2]) / totalFound) + '%'
        }}>
        </div>
      </>
    )
}

export default UserWordsFoundData