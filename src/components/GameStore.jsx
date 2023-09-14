// import { calcMult, calcTotalMult } from "../data/mutlipliers"
// import { formatTime } from "../data/time"
// import formatNumber from "../utils/formatNumber"

import { useState } from "react"


const GameStore = ({user, setUser}) => {
    const [storeMsg, setStoreMsg] = useState('')
    const freebiePrice = 25

    const buyFreebie = () => {
        if (user.points < freebiePrice){
            setStoreMsg('Not enough points')
        } else {
            setUser({
                ...user,
                'points': user.points - freebiePrice,
                'freebies': user.freebies + 1,
              })
              setStoreMsg("Freebie Purchased")
        }
    }
    
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Buy Freebie:</td>
                        <td>{freebiePrice} points</td>
                        <td><button onClick={buyFreebie}>+</button></td>
                    </tr>    
                    <tr>
                        <td colSpan='3'>{storeMsg}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default GameStore