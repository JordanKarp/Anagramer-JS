const GameProgressBar = ({value, max, winPercent}) => {

    const percent = value / max
    return (
      // <progress value={value} max={max}>
      //   <div className="progressBar">
      //       <span>Progress: {percent}%</span>
      //   </div>
      // </progress>

      <meter value={value} min="0" max={max} high={(winPercent/100) * max} optimum={max}>
        <div className="progressBar">
            <span>{percent}%</span>
        </div>
      </meter>

    )
}

export default GameProgressBar