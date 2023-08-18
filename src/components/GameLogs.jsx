const GameLogs = ({logs}) => {
    return (
        <ul className='gameLog'>
            {logs.slice(0,5).map((log) => {
                return <li key={crypto.randomUUID()}>{log}</li>
            })}
        </ul>
    )
}

export default GameLogs