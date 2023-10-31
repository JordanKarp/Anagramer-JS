
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
                <select name='timeType' id="time" onChange={e => setTimeType(e.target.value)}>
                    <option value="Slow" defaultValue={user.roundTime === 'Slow'}>Slow</option>
                    <option value="Normal" defaultValue={user.roundTime === 'Normal'}>Normal</option>
                    <option value="Fast" defaultValue={user.roundTime === 'Fast'}>Fast</option>
                </select>
                {/* <input type="radio" name='timeType' value="Slow" onChange={e => setTimeType(e.target.value)} defaultChecked={user.roundTime === 'Slow'} />
                <label htmlFor="Slow">Slow</label>
                <input type="radio" name='timeType' value="Normal" onChange={e => setTimeType(e.target.value)} defaultChecked={user.roundTime === 'Normal'} />
                <label htmlFor="Normal">Normal</label>
                <input type="radio" name='timeType' value="Fast" onChange={e => setTimeType(e.target.value)} defaultChecked={user.roundTime === 'Fast'} />
                <label htmlFor="Fast">Fast</label> */}
            </label>
            <br/>
            <label>
                Win Type:
                <input type="radio" name='winType' value="60" onChange={e => setWinType(e.target.value)} defaultChecked={user.roundWin === '60'} />
                <label htmlFor="60">Easy: 60%</label>
                <input type="radio" name='winType' value="80" onChange={e => setWinType(e.target.value)} defaultChecked={user.roundWin === '80'} />
                <label htmlFor="80">80%</label>
                <input type="radio" name='winType' value="100" onChange={e => setWinType(e.target.value)} defaultChecked={user.roundWin === '100'} />
                <label htmlFor="100">100%</label>
            </label>
        </form>
    )
}

export default GameSetupForm