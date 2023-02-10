// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.

// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

var kWeakestRows = function (mat, k) {
  let array = [];
  mat.forEach((row, i) => {
    let total = 0;
    let soldiers = 0;
    row.forEach((person) => {
      total += 1;
      if (person === 1) {
        soldiers += 1;
      }
    });
    array.push([total, soldiers, i]);
  });
  array.sort((a, b) => a[1] - b[1]);
  array.sort((a, b) => a[0] - b[0]);
  console.log(array);
  let returnArr = [];
  for (i = 0; i < k; i++) {
    returnArr.push(array[i][2]);
  }
  console.log(returnArr);
  return returnArr;
};

kWeakestRows(
  [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  3
);

kWeakestRows(
  [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  2
);
