export const blockLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const blockNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const themes = {
    // Black and white theme
    bw: {
        "0": "#fff",
        "1": "#000"
    },
    // Brown Theme
    br: {
        "0": "#f5e6bf",
        "1": "#66443a"
    }

}

export function createBoardMatrix() {
    const boardMatrix = [];
    // add value i, j and color of block 
    for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
            row.push({
                i,
                j,
                color: (i + j) % 2 === 0 ? "0" : "1",
            });
        }
        boardMatrix.push(row);
    }
    return boardMatrix;
}
