function isPalindrome(word) {
  // Write your algorithm here

  const revWord = word.split("").reverse().join("")
  if (revWord === word) {
    return true
  } else return false
}

/* 
  Add your pseudocode here
  1. pass the word into palindrome function
  2. split, reverse and then join the word to make reverse of it
  3. compare the two words
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", isPalindrome("racecar"))

  console.log("")

  console.log("Expecting: false")
  console.log("=>", isPalindrome("robot"))
}

module.exports = isPalindrome
