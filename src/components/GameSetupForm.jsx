
const GameSetupForm = ({user, setSize, setWinType, setTimeType}) => {
    if (!user) {
        return (
            <p>User not Loaded</p>
        )
    } else {
        console.log(user)
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

                {/* <input type="radio" name='winType' value="60" onChange={e => setWinType(e.target.value)} defaultChecked={user.roundWin === '60'} />
                <label htmlFor="60">Easy: 60%</label>
                <input type="radio" name='winType' value="80" onChange={e => setWinType(e.target.value)} defaultChecked={user.roundWin === '80'} />
                <label htmlFor="80">80%</label>
                <input type="radio" name='winType' value="100" onChange={e => setWinType(e.target.value)} defaultChecked={user.roundWin === '100'} />
                <label htmlFor="100">100%</label> */}
            </label>
        </form>
    )
}

export default GameSetupForm