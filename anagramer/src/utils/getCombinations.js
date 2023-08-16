import sortStr from "./sortStr";

export default function getCombinations(input) {
    function generateCombinations(prefix, remaining) {
        if (prefix.length >= 2 && !combinations.includes(sortStr(prefix))) {
              combinations.push(sortStr(prefix));
        }
        for (let i = 0; i < remaining.length; i++) {
            generateCombinations(prefix + remaining[i], remaining.slice(i + 1));
        }
    }

    const combinations = [];
    generateCombinations('', input);
    return combinations;
}