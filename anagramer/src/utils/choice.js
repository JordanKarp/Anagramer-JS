const choice = (arr, len) => {
    let items = arr.filter((word) => word.length == len)
    return items.filter((word) => word.length == len)[Math.floor(Math.random() * items.length)];
}

export default choice