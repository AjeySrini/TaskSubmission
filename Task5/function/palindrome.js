let arr = ["hello", "world", "level", "racecar"];
let palindromes = (function(arr) {
  return arr.filter(str => str === str.split("").reverse().join(""));
})(arr);
console.log(palindromes);