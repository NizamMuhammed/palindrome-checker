const input = document.getElementById("text-input")
const button = document.getElementById("check-btn")
const result = document.getElementById("result")

const cleanInputString = (str) => {
  const regEx = /[a-zA-Z]|\d/g
  const arr = str.match(regEx)
  const cleanString = arr.join("").toLowerCase()
  return cleanString
}

const reverseString = (str) => {
  return str.split("").reverse().join("").toLowerCase()
}

const getInnerHtml = (str1, str2) => {
  if (str1 === str2) {
    return `<p class="result-text"><span>${input.value}</span> is a palindrome.</p>`
  } else {
    return `<p class="result-text"><span>${input.value}</span> is not a palindrome.</p>`
  }
}

const checkStringValue = () => {
  if (!input.value) {
    alert("Please input a value")
  } else {
    const cleanString = cleanInputString(input.value)
    const cleanReverseString = reverseString(cleanString)
    result.innerHTML = getInnerHtml(cleanString, cleanReverseString)
  }
}

button.addEventListener("click", checkStringValue)
