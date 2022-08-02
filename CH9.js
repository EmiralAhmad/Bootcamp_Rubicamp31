function spiral(param1) {
  var matriks = [];
  var count = 0;
  var kosong = [];

  for (let i = 0; i < param1; i++) {
    matriks[i] = [];
    for (let j = 0; j < param1; j++) {
      matriks[i][j] = count;
      count++;
    }
  }

  const arr = matriks;
  let row = 0;
  let col = 0;
  let rowEnd = param1 - 1;
  let colEnd = param1 - 1;
  let counter = 0;

  while (col <= colEnd && row <= rowEnd) {
    // atas
    for (let i = col; i <= colEnd; i++) {
      kosong.push(arr[row][i]);
    }
    row++;

    // bawah
    for (let i = row; i <= rowEnd; i++) {
      kosong.push(arr[i][colEnd]);
    }
    colEnd--;

    // kanan
    for (let i = colEnd; i >= col; i--) {
      kosong.push(arr[rowEnd][i]);
    }
    rowEnd--;

    // kiri
    for (let i = rowEnd; i >= row; i--) {
      kosong.push(arr[i][col]);
    }
    col++;
  }
  console.log(kosong);
}

spiral(5);
spiral(6);
spiral(7);
