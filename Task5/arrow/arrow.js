//   Print odd numbers in an array:
const printOddNumbers = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));

//   Convert all the strings to title caps in a string array:
const titleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

// Sum of all numbers in an array:
const sumArray = arr => arr.reduce((total, num) => total + num, 0);

// Return all the prime numbers in an array:
const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
  }
  

const primeNumbers = arr => arr.filter(isPrime);

//   Return all the palindromes in an array:

const isPalindrome = str => str === str.split("").reverse().join("");

const palindromeArray = arr => arr.filter(isPalindrome);