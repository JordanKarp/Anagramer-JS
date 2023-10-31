const formatNumber = (num) => {
    return (Math.round(num * 1000) / 1000) || 0
}

export default formatNumber