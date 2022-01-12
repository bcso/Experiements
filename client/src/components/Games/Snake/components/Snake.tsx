import React, { useState } from 'react';
import PageBaseLayout from '../../../common/PageBaseLayout';
import PageInProgress from '../../../common/PageInProgress';
import { initSnakeGameBoard } from '../helpers/helpers';
import Board from './Board';

function Snake() {

    const [gameBoard, setBoardState] = useState(initSnakeGameBoard());

    return(
        <PageBaseLayout pageTitle="Snake">
            {/* <PageInProgress 
                pageTitle="Snake"
                pageDescription="This is a work in progress page for the Snake game!"/> */}
            
            <Board {...gameBoard} />
        </PageBaseLayout>
    )
}

export default Snake;