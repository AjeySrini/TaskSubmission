((arr, k) => {
    const n = arr.length;
    const rotations = k % n;
    return console.log([...arr.slice(rotations), ...arr.slice(0, rotations)]);
  })([1, 2, 3, 4, 5], 3);