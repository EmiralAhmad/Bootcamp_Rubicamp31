function spiral (n) {

    left = 0;
    top = 0;
    down = n - 1;
    right = n - 1;
    const x = [];
    const u = n*n;

    for (i = left; i<=right; i++) {
        x.push(i);
    }
    top.u++
    
    for (i = top; i<=down; i++) {
        x.push(i);
    }
    right.u++

    for (i = right; i >= left; i--) {
      x.push(i);
    }
    down.u--;

    console.log(x)
}

spiral(5);