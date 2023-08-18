import { calcMult, calcTotalMult } from "../data/mutlipliers"
import { formatTime } from "../data/time"
import formatNumber from "../utils/formatNumber"


const GameSetupTable = ({size, timeType, winType, time, freebies}) => {
    return (
        <>
            <h3>Round Details:</h3>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Value</th>
                        <th>Multiplier</th>
                    </tr>
                    <tr>
                        <td><b>Size</b></td>
                        <td>{size}</td>
                        <td>{formatNumber(calcMult('size', size))} x</td>
                    </tr>
                    <tr>
                        <td><b>Time</b></td>
                        <td>{timeType}</td>
                        <td>{formatNumber(calcMult('time', timeType))} x</td>
                    </tr>
                    <tr>
                        <td><b>Win</b></td>
                        <td>{winType}%</td>
                        <td>{formatNumber(calcMult('win', winType))} x</td>
                    </tr>
                    <tr>
                        <td colSpan='3'>
                            <hr size='1px' color='black'/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Total Multiplier</b></td>
                        <td></td>
                        <td>{formatNumber(calcTotalMult(size,timeType,winType))} x</td>
                    </tr>
                    <tr>
                        <td><b>Total Time</b></td>
                        <td></td>
                        <td>{formatTime(time)}</td>
                    </tr>
                    <tr>
                        <td><b>Freebies Avalable</b></td>
                        <td></td>
                        <td>{freebies}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default GameSetupTable