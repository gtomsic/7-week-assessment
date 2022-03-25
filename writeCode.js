// Sum Zero

// Unique Characters
const hasUniqueChars = (text) => {
  const uniqText = new Set(text)
  const originalText = text.split("")
  return originalText.length === [...uniqText].length ? true : false
}

console.log("HasUnique: ", hasUniqueChars("Moonday"))

// Pangram Sentence
const str = "I like cats, but not mice"
const isPangram = (str = "") => {
  str = str.toLowerCase()
  const { length } = str
  const alphabets = "abcdefghijklmnopqrstuvwxyz"
  const alphaArr = alphabets.split("")
  for (let i = 0; i < length; i++) {
    const el = str[i]
    const index = alphaArr.indexOf(el)
    if (index !== -1) {
      alphaArr.splice(index, 1)
    }
  }
  return !alphaArr.length
}
console.log(isPangram(str))

// Longest Word
const findLongestWord = (arr) => {
  let currValue = 0
  arr.forEach((word) => {
    word.split("").length > currValue
      ? (currValue = word.split("").length)
      : null
  })
  return currValue
}

console.log(findLongestWord(["hi", "hello"]))
