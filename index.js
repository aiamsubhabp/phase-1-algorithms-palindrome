function reverseWord(word) {
  const reversedWord = word.split('').reverse().join('')
  return reversedWord
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseWord(word)
  if (reversedWord === word) {
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
  write helper function that reverses a word.
  use this function in isPalindrome function to test if reverse of word is equal to word.
  if true, retrurn true
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
