const knightSteps = [
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1]
];

function knightBoard() {
    const boardSize = 8;
    let board = '';
    for(let i = 0; i < boardSize; i++) {
        let row = ''
        for (let j = 0; j < boardSize; j++) {
           row += `[${i}, ${j}])`
        }
        board += row + '\n';
        
    }
    return board;
}
const board = knightBoard();
function knightMoves([x, y], [dx, dy]) {
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
        return null;
    }
    const queue = [[x, y, 0, []]];
    const visited = new Set();
    visited.add(`${x}, ${y}`);
    while (queue.length > 0) {
        const [currentX, currentY, moves, path] = queue.shift();
        if (currentX === dx && currentY === dy) {
            return {moves, path: [...path, [currentX, currentY]]}
        }
        for (const [mx, my] of knightSteps) {
            const newX = currentX + mx;
            const newY = currentY + my;
            if (newX >= 0 && newY < 8 && newY >= 0 && newY < 8 && !visited.has(`${newX}, ${newY}`)) {
                visited.add(`${newX}, ${newY}`);
                queue.push([newX, newY, moves + 1, [...path, [currentX, currentY]]]);
            }
        }
    }
    return null;

}
console.log(board)
console.log(knightMoves([0, 0], [5, 5]))