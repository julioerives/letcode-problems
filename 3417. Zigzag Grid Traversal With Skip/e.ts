function zigzagTraversal(grid: number[][]): number[] {
    const result: number[] = [];
    for (let i = 0; i < grid.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < grid[i].length; j+=2) {
                result.push(grid[i][j]);
            }
        } else {
            for (let j = grid[i].length - (grid[0].length %2===0 ? 1 :2); j >= 0; j-=2) {
                result.push(grid[i][j]);
            }
        }
    }
    return result
};