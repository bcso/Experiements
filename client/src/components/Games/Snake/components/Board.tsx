import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../css/Board.module.css";
import { Coord, ISnakeBoardProps } from "../types";
import Cell from "./Cell";

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
            
            <Cell/><Cell/><Cell/><Cell/><Cell/>
            
            <Container className={styles.boardContainer}>
                <Row> Board: </Row>
                <Row style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    }}>
                    <Row> 
                        <Cell color="blue"/> <Cell/><Cell/><Cell/><Cell/><Cell/>
                    </Row>
                    <Row> 
                        <Cell color="blue"/> <Cell/><Cell/><Cell/><Cell/><Cell/>
                    </Row>
                    <Row> 
                        <Cell color="blue"/> <Cell/><Cell/><Cell/><Cell/><Cell/>
                    </Row>
                    <Row> 
                        <Cell color="blue"/> <Cell/><Cell/><Cell/><Cell/><Cell/>
                    </Row>
                </Row>
                <Row> Debug Info: </Row>
                <Row> vSize: {gameBoard.vSize} </Row>
                <Row> hSize: {gameBoard.hSize} </Row>
                <Row> Snake Coords: {gameBoard.snake.coordinates.map((coord : Coord) => {
                    return `[r:${coord[0]}, c:${coord[1]}]`
                })} </Row>
                <Row> Food Coords: {gameBoard.food.coordinates.map((coord : Coord) => {
                    return `[r:${coord[0]}, c:${coord[1]}]`
                })} </Row>
                <Row> Obstacle Coords: {gameBoard.obstacles.coordinates.map((coord : Coord) => {
                    return `[r:${coord[0]}, c:${coord[1]}]`
                })} </Row>
            </Container>
        </>
    )
}

export default Board;