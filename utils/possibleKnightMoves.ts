export default function possibleKnightMoves(i: number, j: number) {

    // max 8 blocks can be captures at a time
    let tempCanBeCaptured = [];
    // Increase i by 2 and j by 1
    if (i + 2 < 8 && j + 1 < 8) {
        tempCanBeCaptured.push({ i: i + 2, j: j + 1 });
    }
    // Increase i by 2 and decrease j by 1
    if (i + 2 < 8 && j - 1 >= 0) {
        tempCanBeCaptured.push({ i: i + 2, j: j - 1 });
    }
    // Decrease i by 2 and increase j by 1
    if (i - 2 >= 0 && j + 1 < 8) {
        tempCanBeCaptured.push({ i: i - 2, j: j + 1 });
    }
    // Decrease i by 2 and decrease j by 1
    if (i - 2 >= 0 && j - 1 >= 0) {
        tempCanBeCaptured.push({ i: i - 2, j: j - 1 });
    }
    // Increase i by 1 and increase j by 2
    if (i + 1 < 8 && j + 2 < 8) {
        tempCanBeCaptured.push({ i: i + 1, j: j + 2 });
    }
    // Increase i by 1 and decrease j by 2
    if (i + 1 < 8 && j - 2 >= 0) {
        tempCanBeCaptured.push({ i: i + 1, j: j - 2 });
    }
    // Decrease i by 1 and increase j by 2
    if (i - 1 >= 0 && j + 2 < 8) {
        tempCanBeCaptured.push({ i: i - 1, j: j + 2 });
    }
    // Decrease i by 1 and decrease j by 2
    if (i - 1 >= 0 && j - 2 >= 0) {
        tempCanBeCaptured.push({ i: i - 1, j: j - 2 });
    }
    return tempCanBeCaptured;
}