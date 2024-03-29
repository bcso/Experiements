import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../css/Board.module.css";
import { Vector, Coord, Coordinates, IEmpty, ISnake, IFood, ISnakeBoardProps, IObstacles, Direction } from "../types";
import Cell from "./Cell";
import {coordsContainsTarget, vectorStringMap} from "../helpers/helpers";

function Board({...props} : ISnakeBoardProps) {

    const currentDirection : Direction = props.currentDirection;
    const currentVector : Vector = vectorStringMap[currentDirection];

    const vSize : number = props.vSize;
    const hSize : number = props.hSize;

    const snakeProp : ISnake = props.snake;
    const foodProp : IFood = props.food;
    const emptySpaceProp : IEmpty = props.emptySpaces;
    const obstacleProp : IObstacles = props.obstacles;

    const emptySpaceCoords : Coordinates = emptySpaceProp.coordinates;
    const snakeCoords : Coordinates = snakeProp.coordinates;
    const foodCoords : Coordinates = foodProp.coordinates;
    const obstacleCoords : Coordinates = obstacleProp.coordinates;

    /*
    Head Interactions

    Death:
    1. head out of bounds
    2. Snake eat self
        coordsContainsTarget(snakeCoords, snakeProp.head)
    3. Snake collide with obstacle
        coordsContainsTarget(obstacleCoords, snakeProp.head)

    Growth:
    1. Snake eat food
        coordsContainsTarget(foodCoords, snakeProp.head)

    EventQueue : last button input before TickInterval is flushed to EventQueue
        Types of events:
            --> Move Change Event --> mutates the gameBoardState.currentDirection field
            --> TickInterval Speedup Event --> decreases the TickInterval state

    ProcessEvent --> at TickInterval process the event from EventQueue

    */

    function drawBoard(
        vSize : number, 
        hSize : number,
        emptySpaceCoords : Coordinates,
        snakeCoords : Coordinates,
        foodCoords : Coordinates,
        obstacleCoords : Coordinates)
    {
        let board = [];
        for (let y = 0; y<vSize; y++) board.push(Array.from('x'.repeat(hSize)));

        return (board.map((row, yIdx) => {
            return (<Row>
                {row.map((_, xIdx) => {
                        const currCoord : Coord = [yIdx, xIdx];
                        if (coordsContainsTarget(snakeCoords, currCoord))
                        {
                            return <Cell color="blue"/>
                        } else if (coordsContainsTarget(foodCoords, currCoord))
                        {
                            return <Cell color="white"/>
                        } else if (coordsContainsTarget(obstacleCoords, currCoord))
                        {
                            return <Cell color="brown"/>
                        } else 
                        {
                            return <Cell/>
                        }
                    }
                )}
            </Row>)
        }))
    }

    return (
        <>
            <Container className={styles.boardContainer}>
                <Row> Board: </Row>
                <Row>
                    {drawBoard(vSize, 
                                hSize,
                                emptySpaceCoords,
                                snakeCoords,
                                foodCoords,
                                obstacleCoords)}
                </Row>

                <Row> Debug Info: </Row>
                <Row> CurrentDir: {currentVector}</Row>
                <Row> CurrentDirection: {currentDirection}</Row>
                <Row> vSize: {vSize} </Row>
                <Row> hSize: {hSize} </Row>
                <Row> Snake Coords: {snakeCoords.map((coord : Coord) => {
                    return `[r:${coord[0]}, c:${coord[1]}]`
                })}</Row>
                <Row> Snake Head: {`[r:${snakeProp.head[0]}, c:${snakeProp.head[1]}]`}</Row>
                <Row> Snake Tail: {`[r:${snakeProp.tail[0]}, c:${snakeProp.tail[1]}]`}</Row>
                <Row> Food Coords: {foodCoords.map((coord : Coord) => {
                    return `[r:${coord[0]}, c:${coord[1]}]`
                })} </Row>
                <Row> Obstacle Coords: {obstacleCoords.map((coord : Coord) => {
                    return `[r:${coord[0]}, c:${coord[1]}]`
                })} </Row>
            </Container>
        </>
    )
}

export default Board;