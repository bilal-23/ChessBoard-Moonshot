import possibleKnightMoves from '@/utils/possibleKnightMoves';
import { useEffect, useState } from 'react';
import styles from "./Board.module.css";
import { blockLetters, blockNumbers, themes, createBoardMatrix } from "@/utils/chessBoardData";



const Board = () => {
    const [activeTheme, setActiveTheme] = useState(themes.bw);
    const [blocks] = useState<{ i: number, j: number, color: string }[][]>(createBoardMatrix);
    const [activeBlock, setActiveBlock] = useState<{ i: number, j: number } | null>(null);
    const [canBeCaptured, setCanBeCaptured] = useState<{ i: number, j: number }[]>([]);

    useEffect(() => {
        // set active block to null if clicked outside the board
        const handleOutsideClick = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement) {
                if (e.target.closest(`.${styles["themes"]}`)) return;
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
            const possibleMoves = possibleKnightMoves(i, j);
            setActiveBlock({ i, j });
            setCanBeCaptured(possibleMoves);
        }
    }


    return (
        <>
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
                                        style={
                                            {
                                                backgroundColor: block.color === "0" ? activeTheme["0"] : activeTheme["1"],
                                                color:
                                                    block.color === "1" ? "white" : "black"
                                            }}
                                    >
                                        {blockLetters[i]}{blockNumbers[7 - j]}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <div className={styles.themes}>
                <div className={`${styles.theme} ${activeTheme === themes.bw && styles.active}`} onClick={() => setActiveTheme(themes.bw)}></div>
                <div className={`${styles.theme} ${activeTheme === themes.br && styles.active}`} onClick={() => setActiveTheme(themes.br)}></div>
            </div>
        </>
    )
}

// Board.name = "Board";

export default Board