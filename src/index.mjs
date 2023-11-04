let spiral = [];
for(let i = 0; i < 10; i++) {
    let row = [];
    for(let j = 0; j < 10; j++) {
        row.push(0);
    }
    spiral.push(row);
}

let num = 1;
let row = 0, column = 0;
while(num <= 100) {
    while(spiral[row][column] === 0) {
        spiral[row][column] = num++;
        column++;
    }
    column--;
    row++;
    
    while(spiral[row] && spiral[row][column] === 0) {
        spiral[row][column] = num++;
        row++;
    }
    row--;
    column--;

    while(spiral[row][column] === 0) {
        spiral[row][column] = num++;
        column--;
    }
    column++;
    row--;

    while(spiral[row] && spiral[row][column] === 0) {
        spiral[row][column] = num++;
        row--;
    }
    row++;
    column++;
}

spiral = spiral.map(row => row.join('     '));
console.log(spiral.join('\n\n'));
