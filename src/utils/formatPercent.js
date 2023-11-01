const formatPercent = (num) => {
    return (Math.round(num * 10000) / 100)  || 0
}

export default formatPercent