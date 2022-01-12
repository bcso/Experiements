import React from "react";
import { Container } from "react-bootstrap";
import styles from "../css/Board.module.css";
import { ISnakeBoardProps } from "../types";

// (parameter) gameBoard: {
//     vSize: number;
//     hSize: number;
//     currentDirection: Vector;
//     gameWin: boolean;
//     snake: ISnake;
//     food: IFood;
//     obstacles?: IObstacles;
//     emptySpaces: IEmpty;
// }

function Board({...gameBoard} : ISnakeBoardProps) {
    return (
        <>
            <Container>
                {gameBoard.vSize}
                {gameBoard.hSize}
            </Container>
        </>
    )
}

export default Board;