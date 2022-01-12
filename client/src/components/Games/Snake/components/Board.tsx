import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../css/Board.module.css";
import { Coord, ISnakeBoardProps } from "../types";

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
                <Row> Debug Info: </Row>
                <Row> vSize: {gameBoard.vSize} </Row>
                <Row> hSize: {gameBoard.hSize} </Row>
                <Row> Snake Coords: {gameBoard.snake.coordinates.map((coord : Coord) => {
                    return <Row>{`r: ${coord[0]} c: ${coord[1]}`}</Row>
                })} </Row>
                <Row> Food Coords: {gameBoard.food.coordinates.map((coord : Coord) => {
                    return <Row>{`r: ${coord[0]} c: ${coord[1]}`}</Row>
                })} </Row>
                <Row> Obstacle Coords: {gameBoard.obstacles.coordinates.map((coord : Coord) => {
                    return <Row>{`r: ${coord[0]} c: ${coord[1]}`}</Row>
                })} </Row>
            </Container>
        </>
    )
}

export default Board;