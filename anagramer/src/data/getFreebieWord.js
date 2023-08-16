const getFreebieWord = (anagrams, wordsFound) => {
    const availableWords = anagrams.filter(x => !wordsFound.includes(x));
    return availableWords[Math.floor(Math.random() * availableWords.length)]
}

export default getFreebieWord

