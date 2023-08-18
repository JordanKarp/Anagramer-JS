const compareArrays = (a, b) => {
    a.sort();
    b.sort();
    return (a.length === b.length && a.every((element, index) => element === b[index]))
}

export default compareArrays