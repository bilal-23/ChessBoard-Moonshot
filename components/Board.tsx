import React, { useEffect, useState } from 'react';
import styles from "./board.module.css";

const blockLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const blockNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

function createBoardMatrix() {
    const boardMatrix = [];
    // add value i, j and color of block 
    for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
            row.push({
                i,
                j,
                color: (i + j) % 2 === 0 ? "white" : "black",
            });
        }
        boardMatrix.push(row);
    }
    return boardMatrix;
}

const Board = () => {
    const [blocks] = useState<{ i: number, j: number, color: string }[][]>(createBoardMatrix);
    const [activeBlock, setActiveBlock] = useState<{ i: number, j: number } | null>(null);
    const [canBeCaptured, setCanBeCaptured] = useState<{ i: number, j: number }[]>([]);

    useEffect(() => {
        // set active block to null if clicked outside the board
        const handleOutsideClick = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement) {
                if (!e.target.closest(`.${styles["board"]}`)) {
                    setActiveBlock(null);
                    setCanBeCaptured([]);
                }
            }
        }
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        }
    }, [])

    function captureHandler(i: number, j: number) {
        // if active block is same as the block clicked
        if (activeBlock?.i === i && activeBlock?.j === j) {
            setActiveBlock(null);
            setCanBeCaptured([]);
            return;
        } else {
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
            setActiveBlock({ i, j });
            setCanBeCaptured(tempCanBeCaptured);
        }
    }


    return (
        <div className={styles["board"]}>
            {blocks.map((row, i) => {
                return (
                    <div className={`${styles["row"]}`} key={i}>
                        {row.map((block: { i: number, j: number, color: string }, j: number) => {
                            return (
                                <div
                                    onClick={() => captureHandler(block.i, block.j)}
                                    className={`
                                    ${styles["block"]} ${activeBlock?.i === block.i && activeBlock?.j === block.j ? styles["active"] : ""}
                                    ${canBeCaptured.find((block) => block.i === i && block.j === j) ? styles["can-be-captured"] : ""}
                                    `}
                                    key={j}
                                    style={{ backgroundColor: block.color, color: block.color === "black" ? "white" : "black" }}
                                >
                                    {blockLetters[i]}{blockNumbers[7 - j]}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}

// Board.name = "Board";

export default Board