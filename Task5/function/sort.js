((arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(mergedArray.length / 2);
    return mergedArray.length % 2 !== 0 ? mergedArray[mid] : (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  })([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);