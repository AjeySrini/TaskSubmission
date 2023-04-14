let arr = [1, 2, 3, 4, 5];
let oddNumbers = (function(arr) {
  return arr.filter(num => num % 2 !== 0);
})(arr);
console.log(oddNumbers);