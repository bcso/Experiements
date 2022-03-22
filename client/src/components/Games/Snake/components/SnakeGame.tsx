import React, { useEffect, useState } from 'react';
import PageBaseLayout from '../../../common/PageBaseLayout';
import PageInProgress from '../../../common/PageInProgress';
import { initSnakeGameBoardState, vectorStringMap } from '../helpers/helpers';
import { Vector } from '../types';
import Board from './Board';
import Keypad from './Keypad';

function SnakeGame() {

    const [gameBoardState, setBoardState] = useState(initSnakeGameBoardState());

    // We need to be able to detect user UDLR keypad input
    // Do this only once : on SnakeGame component's first render, add the
    // event listener handleKeyDown to keydown, and on the component unmount
    // clean it up by returning
    // source : https://www.pluralsight.com/guides/event-listeners-in-react-components
    React.useEffect(() => {
        // do this on first render
        window.addEventListener("keydown", handleKeyDown);

        // do this when component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []); // Only mount on first render ONCE

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
        gameBoardState.currentVector])

    function drawBoard()
    {
        console.log("Snake moving in : " + gameBoardState.currentVector);
    }

    function updateCurrVector(direction: string)
    {
        const newState = {...gameBoardState};
        newState.currentVector = vectorStringMap[direction];
        setBoardState(newState);
    }

    function onKeypadPress(direction: string)
    {
        updateCurrVector(direction);
    }

    function handleKeyDown(e : KeyboardEvent)
    {
        e.preventDefault();
        // update the game start state on first render
        if (!gameBoardState.didGameStart)
        {
            gameBoardState.didGameStart = true;
        }
        if (e.key === "ArrowUp")
        {
            updateCurrVector("Up");
        } else if (e.key === "ArrowDown")
        {
            updateCurrVector("Down");
        } else if (e.key === "ArrowLeft")
        {
            updateCurrVector("Left");
        } else if (e.key === "ArrowRight")
        {
            updateCurrVector("Right");
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