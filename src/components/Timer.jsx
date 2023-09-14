import { useState, useEffect } from 'react';

const Timer = ({ initialTime, gameOver } ) => {
    const [ minutes, setMinutes ] = useState(Math.floor(initialTime/60));
    const [ seconds, setSeconds ] =  useState(initialTime % 60);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    gameOver()
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? <p>Time Up!</p>
            : <p>Time: {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p>
        }
        </div>
    )
}

export default Timer;