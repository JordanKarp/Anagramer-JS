const getTime = (type, wordSize) => {
    switch (type) {
      case 'Slow':
        return wordSize * 180 - 420
      case 'Normal':
        return wordSize * 120 - 300
      case 'Fast':
        return wordSize * 30 - 60
    }
}

const formatTime = (time) => {
    if (time < 60) {
      return `${time} seconds`
    }
    if (time <= 119) {
        if (time % 60 === 0) {
            return `1 minute`
        } else {
            return `1 minute, ${time%60} seconds`
        }
    }
    if (time % 60 === 0) {
        return `${time / 60} minutes`
    } else {
        return `${Math.floor(time / 60)} minutes, ${time%60} seconds`
    }

}

export {getTime, formatTime}