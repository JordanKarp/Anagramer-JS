const formatPercent = (num) => {
    return ((Math.round(num * 1000) / 1000) * 100) || 0
}

export default formatPercent