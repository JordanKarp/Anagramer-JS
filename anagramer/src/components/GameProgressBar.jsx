const GameProgressBar = ({value, max}) => {

    const percent = value / max
    return (
      <progress value={value} max={max}>
        <div className="progressBar">
            <span>Progress: {percent}%</span>
        </div>
      </progress>

    )
}

export default GameProgressBar