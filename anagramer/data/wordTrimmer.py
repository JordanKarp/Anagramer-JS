import json

# def load_words(word_file):
#     with open(word_file, "r") as f:
#         dictionary = f.read()
#     return {x.lower(): 1 for x in dictionary.split("\n")}

MAX_WORD_LENGTH = 7


def createLookupDict(wordFile):
    lookupDict = {}
    with open(wordFile, "r") as f:
        dictionary = f.read()
    for word in dictionary.split("\n"):
        sortStr = "".join(sorted(word.lower()))
        if len(sortStr) > MAX_WORD_LENGTH:
            continue
        if sortStr not in lookupDict:
            lookupDict[sortStr] = [word]
        else:
            lookupDict[sortStr].append(word)
    return lookupDict


# d = createLookupDict("wordList.txt")

# for k, v in d.items():
#     print(f"{k}: {v}")

# print(str(d))

with open("wordListDict-short.json", "w") as f:
    wordDict = createLookupDict("wordList.txt")
    f.write(json.dumps(wordDict))
