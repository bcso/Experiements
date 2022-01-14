import React, { useState } from 'react';
import PageBaseLayout from '../../../common/PageBaseLayout';
import PageInProgress from '../../../common/PageInProgress';
import { initSnakeGameBoard, initVector } from '../helpers/helpers';
import Board from './Board';
import Keypad from './Keypad';

function SnakeGame() {

    const [gameBoard, setBoardState] = useState(initSnakeGameBoard());
    const [currentVector, setCurrentVector] = useState(initVector());

    return(
        <PageBaseLayout pageTitle="Snake">
            {/* <PageInProgress 
                pageTitle="Snake"
                pageDescription="This is a work in progress page for the Snake game!"/> */}
            
            <Board {...gameBoard} />
            <Keypad />
        </PageBaseLayout>
    )
}

export default SnakeGame;