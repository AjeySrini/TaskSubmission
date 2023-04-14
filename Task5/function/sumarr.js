let arr1 = [1, 2, 3, 4, 5];
let sum = (function(arr1) {
  return arr1.reduce((acc, curr) => acc + curr, 0);
})(arr1);
console.log(sum);