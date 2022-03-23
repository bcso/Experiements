import React, { useEffect, useState } from 'react';
import PageBaseLayout from '../../../common/PageBaseLayout';
import PageInProgress from '../../../common/PageInProgress';
import { initSnakeGameBoardState, vectorStringMap, isValidNewDirection, coordsContainsTarget } from '../helpers/helpers';
import { Coord, Coordinates, Direction, IFood, IObstacles, ISnake, ISnakeBoardProps, Vector } from '../types';
import Board from './Board';
import Keypad from './Keypad';

function SnakeGame() {

    const [gameBoardState, setBoardState] = useState(initSnakeGameBoardState());

    // We need to be able to detect user UDLR keypad input
    // Do this only once : on SnakeGame component's first render, add the
    // event listener handleKeyboardDirInput to keydown, and on the component unmount
    // clean it up by returning
    // source : https://www.pluralsight.com/guides/event-listeners-in-react-components
    useEffect(() => {
        // if game has not been lost or won yet, we are in the middle of an active session, 
        // so continue handling keybaord direciton input
        if (gameBoardState.gameWin === undefined)
        {
            // do this on first render
            window.addEventListener("keydown", handleKeyboardDirInput);

            // do this when component unmounts
            return () => {
                window.removeEventListener("keydown", handleKeyboardDirInput);
            }
        } else if (gameBoardState.gameWin === false)
        {
            console.log("You lost! Score: " + gameBoardState.snake.coordinates.length);
        } else if (gameBoardState.gameWin === true)
        {
            console.log("You Won! Score: " + gameBoardState.snake.coordinates.length);
        }
    }, [gameBoardState.gameWin,
        gameBoardState.currentDirection]); 
    // On mount, update the handleKeyboardDirInput event handler as it contains gameBoardState.currentDirection dependency

    useEffect(() => {
        let interval : NodeJS.Timer = undefined;

        // only continue drawing the board when the game is started
        if (gameBoardState.isGameOngoing)
        {
            // todo : make delay consistent after key stroke
            interval = setInterval(drawBoard, 1000);
        }

        // regardless of if game is started or stopped, clear our interval
        if (interval != undefined)
        {
            // clear our interval when a new change happens
            return () => {
                clearInterval(interval);
            }
        }
    }, [gameBoardState.isGameOngoing, 
        gameBoardState.currentDirection])

    function drawBoard()
    {
        let newState : ISnakeBoardProps = {...gameBoardState};
        moveSnake(newState);
        setBoardState(newState);
    }

    function moveSnake(newState : ISnakeBoardProps)
    {
        /**
         * Todos:
         * Death Triggers: 
         *  Head on bound
         *  Head on self
         *  Head on rock
         * Death Event:
         *  Restart Page
         * Eat Trigger:
         *  Head on food
         * Eat Event:
         *  Update Score
         *  Update Snake length
         */
        // update head and tail only
        let currentDirection : Direction = newState.currentDirection;
        let snake : ISnake = newState.snake;
        let obstacles : IObstacles = newState.obstacles;
        let food : IFood = newState.food;

        let candidateNewHead : Coord = [
            snake.coordinates[snake.coordinates.length - 1][0] + vectorStringMap[currentDirection][0],
            snake.coordinates[snake.coordinates.length - 1][1] + vectorStringMap[currentDirection][1]
        ]
        
        if (isDead(candidateNewHead, snake.coordinates, obstacles.coordinates, newState.hSize, newState.vSize))
        {
            // stop the game
            newState.isGameOngoing = false;
            // update the game state
            newState.gameWin = false;
        } else 
        {
            if (didSnakeEat(candidateNewHead, food.coordinates))
            {
                snake.coordinates.push(candidateNewHead);
            } else 
            {
                snake.coordinates.push(candidateNewHead);
                snake.coordinates.shift();
            }
        }
    }

    function didSnakeEat(candidateHeadCoord : Coord, foodCoords : Coordinates)
    {
        if (coordsContainsTarget(foodCoords, candidateHeadCoord))
        {
            return true;
        }
        return false;
    }

    function isDead(
        newCoord : Coord, 
        snakeCoords : Coordinates, 
        obsCoords : Coordinates, 
        boardHeight : number, 
        boardWidth : number) : boolean
    {
        if (coordsContainsTarget(snakeCoords, newCoord) ||
            coordsContainsTarget(obsCoords, newCoord) ||
            newCoord[0] < 0 || newCoord[0] >= boardWidth ||
            newCoord[1] < 0 || newCoord[1] >= boardHeight)
            {
                return true;
            }
        return false;
    }

    function updateCurrDirection(newDirection: Direction)
    {
        // update the game start state on first render
        if (!gameBoardState.isGameOngoing)
        {
            gameBoardState.isGameOngoing = true;
        }

        // If our game started, make sure any new direction is valid before moving our snake
        // Snake should never move backwards
        if (gameBoardState.isGameOngoing && 
            isValidNewDirection(gameBoardState.currentDirection, newDirection))
        {
            const newState = {...gameBoardState};
            newState.currentDirection = newDirection;
            setBoardState(newState);
        }
    }

    function onKeypadPress(direction: Direction)
    {
        updateCurrDirection(direction);
    }

    function handleKeyboardDirInput(e : KeyboardEvent)
    {
        e.preventDefault();
        if (e.key === "ArrowUp")
        {
            updateCurrDirection(Direction.Up);
        } else if (e.key === "ArrowDown")
        {
            updateCurrDirection(Direction.Down);
        } else if (e.key === "ArrowRight")
        {
            updateCurrDirection(Direction.Right);
        } else if (e.key === "ArrowLeft")
        {
            updateCurrDirection(Direction.Left);
        }
    }

    return(
        <PageBaseLayout pageTitle="Snake">
            {/* <PageInProgress 
                pageTitle="Snake"
                pageDescription="This is a work in progress page for the Snake game!"/> */}
            
            <Board {...gameBoardState} />
            <Keypad onKeypadPress={onKeypadPress}/>
        </PageBaseLayout>
    )
}

export default SnakeGame;