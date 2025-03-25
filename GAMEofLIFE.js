

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.

// Given the current state of the board, update the board to reflect its next state.

// Note that you do not need to return anything.


/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    // original | new-satte | change-state
    // 0 | 0 | 0
    // 1 | 0 | 1
    // 0 | 1 | 2
    // 1 | 1 | 3
    const row = board.length
    const col = board[0].length

// loop over and replace the original cell numbers with the amount of living neighbors
    for (let r = 0; r <= row -1; r++){
        for(let c = 0; c <= col -1; c++) {
            const neighbors = countNei(r, c)
            if(board[r][c] === 1){
                if([2, 3].includes(neighbors)){
                    board[r][c] = 3
                }
            }
            else if(neighbors === 3) {
                board[r][c] = 2
            }
        }
    }

// loop over and replace state numbers with their new states
    for (let r = 0; r <= row -1; r++){
        for(let c = 0; c <= col -1; c++) {
            if(board[r][c] === 1){
                board[r][c] = 0
            }
            else if([2, 3].includes(board[r][c])){
                board[r][c] = 1
            }
        }
    }



// helper function
    function countNei(r, c) {
        let n = 0

        for (let i = r - 1; i <= r + 1; i++){
            for(let j = c - 1; j <= c + 1; j++) {
                // exclude out of bound cells
                if((i === r && j === c) || i < 0 || j < 0 || i === row  || j === col ){
                    continue
                }
                if([1, 3].includes(board[i][j])){
                    n += 1
                }
            }
        }
        return n
    }

};

