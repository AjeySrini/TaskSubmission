let strArr = ["hello world", "how are you", "goodbye"];
let titleCaps = (function(strArr) {
  return strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
})(strArr);
console.log(titleCaps);