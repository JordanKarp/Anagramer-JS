
const GameSetupForm = ({user, setSize, setWinType, setTimeType}) => {
    if (!user) {
        return (
            <p>User not Loaded</p>
        )
    }

    return (
        <form>
            <label>
                Target Word Size: 
                <input type="number" pattern="[0-9]*" step='1' name="size" min="3" max="7" onChange={e => setSize(e.target.value)} defaultValue={user.roundSize} />
            </label>
            <br/>
            <label>
                Time Setting: 
                <select name='timeType' id="time" onChange={e => setTimeType(e.target.value)} defaultValue={user.roundTime}>
                    <option value="Slow">Slow</option>
                    <option value="Normal">Normal</option>
                    <option value="Fast">Fast</option>
                </select>
            </label>
            <br/>
            <label>
                Win Type: 
                <select name='winType' id="win" onChange={e => setWinType(e.target.value)} defaultValue={user.roundWin}>
                    <option value="60">Easy</option>
                    <option value="80">Medium</option>
                    <option value="100">Hard</option>
                </select>
            </label>
        </form>
    )
}

export default GameSetupForm