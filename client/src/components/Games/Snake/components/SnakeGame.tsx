import React, { useEffect, useState } from 'react';
import PageBaseLayout from '../../../common/PageBaseLayout';
import PageInProgress from '../../../common/PageInProgress';
import { initSnakeGameBoardState, vectorStringMap, isValidNewDirection } from '../helpers/helpers';
import { Coord, Direction, ISnake, ISnakeBoardProps, Vector } from '../types';
import Board from './Board';
import Keypad from './Keypad';

function SnakeGame() {

    const [gameBoardState, setBoardState] = useState(initSnakeGameBoardState());

    // We need to be able to detect user UDLR keypad input
    // Do this only once : on SnakeGame component's first render, add the
    // event listener handleKeyDown to keydown, and on the component unmount
    // clean it up by returning
    // source : https://www.pluralsight.com/guides/event-listeners-in-react-components
    useEffect(() => {
        // do this on first render
        window.addEventListener("keydown", handleKeyDown);

        // do this when component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [gameBoardState.currentDirection]); 
    // On mount, update the handleKeyDown event handler as it contains gameBoardState.currentDirection dependency

    useEffect(() => {
        if (gameBoardState.didGameStart)
        {
            // todo : make delay consistent after key stroke
            let interval = setInterval(drawBoard, 1000);

            // clear our interval when a new change happens
            return () => {
                clearInterval(interval);
            }
        }
    }, [gameBoardState.didGameStart, 
        gameBoardState.currentDirection])

    function drawBoard()
    {
        let newState : ISnakeBoardProps = {...gameBoardState};
        let currentDirection : Direction = newState.currentDirection;
        let snake : ISnake = newState.snake;
        moveSnake(snake, currentDirection);

        setBoardState(newState);
    }

    function moveSnake(snake : ISnake, newDirection : Direction)
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
        let newHead : Coord = [
            snake.coordinates[snake.snakeLen - 1][0] + vectorStringMap[newDirection][0],
            snake.coordinates[snake.snakeLen - 1][1] + vectorStringMap[newDirection][1]
        ]
        snake.coordinates.push(newHead);
        snake.coordinates.shift();
    }

    function updateCurrDirection(newDirection: Direction)
    {
        // update the game start state on first render
        if (!gameBoardState.didGameStart)
        {
            gameBoardState.didGameStart = true;
        }

        // If our game started, make sure any new direction is valid before moving our snake
        // Snake should never move backwards
        if (gameBoardState.didGameStart && 
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

    function handleKeyDown(e : KeyboardEvent)
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