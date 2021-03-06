// Sum Zero
const addToZero = (myArray) => {
  let defaultValue = false
  for (let i = 0; i < myArray.length; i++) {
    for (let x = 0; x < myArray.length; x++) {
      if (myArray[i] + myArray[x] === 0) {
        if (i === x) {
          return
        } else {
          defaultValue = true
        }
      }
    }
  }
  return defaultValue
}
// O(n2)
// Using buble sort nested for loops with in function

console.log("addToZero: ", addToZero([1, 2, 3]))

// Unique Characters
const hasUniqueChars = (text) => {
  const uniqText = new Set(text)
  const originalText = text.split("")
  return originalText.length === [...uniqText].length ? true : false
}
// O(n)
// I bealieve because I used linear search and just get the length of array to compare

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
// O(n log n)
// I use multiple things inside the function like sorting compared statement and reading values and indexes
// Sorry Jeddy don't know what i am doing

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
// O(1)
// Because my search is contant

console.log(findLongestWord(["Understanding", "hi", "hello", "Gabriel"]))
