let str = "noon";

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(isPalindrome(str));
