// Sum Zero

// Unique Characters
const hasUniqueChars = (text) => {
  const uniqText = new Set(text)
  const originalText = text.split("")
  return originalText.length === [...uniqText].length ? true : false
}

console.log("HasUnique: ", hasUniqueChars("Moonday"))
