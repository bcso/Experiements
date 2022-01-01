import React, {useEffect, useState} from 'react';
import PageBaseLayout from '../../../common/PageBaseLayout';
import GameBoard from './GameBoard';
import MoveHistory from './MoveHistory';
import {Container, Row, Col, Button} from 'react-bootstrap';
import styles from '../css/TicTacToe.module.css';
import {generateDefaultGameState, 
        generateDefaultMoves,
        determineWinnerData} from '../helpers/helpers';
import { Move } from '../helpers/Move';
import { Board, IGameState, IPlayers } from '../helpers/types';

function TicTacToe() {

    // Make sure we use new references as initial states;
    const [gameState, setGameState] = useState(generateDefaultGameState());
    const [moves, setMoves] = useState(generateDefaultMoves());

    function resetState()
    {
        setMoves(generateDefaultMoves());
        setGameState(generateDefaultGameState());
    }

    function handleMoveInput(player: string, moveRow: number, moveCol: number) {
        // Update our board with the new move

        // Input validation, make sure the cell is unused
        if (gameState.boardState.board[moveRow][moveCol] !== '*') return;

        const newBoard : Board = [... gameState.boardState.board];
        newBoard[moveRow][moveCol] = gameState.players[player];

        const newGameState : IGameState = {... gameState};
        newGameState.boardState.board = newBoard;

        // Update the current player
        const currentPlayer : string = gameState.boardState.currentPlayer;

        if (currentPlayer === "P1" || currentPlayer === "")
        {
            newGameState.boardState.currentPlayer = "P2";
            newGameState.boardState.previousPlayer = "P1";
        } else {
            newGameState.boardState.currentPlayer = "P1";
            newGameState.boardState.previousPlayer = "P2";
        }

        newGameState.boardState.currentMove = [moveRow, moveCol];
        setGameState(newGameState);
    }

    useEffect(() => {
        const prevPlayer = gameState.boardState.previousPlayer;

        // Ensure at least 1 player has gone
        if (prevPlayer !== "")
        {
            const newMoves = [... moves];
            const newMove = new Move(
                prevPlayer, 
                gameState.boardState.currentMove[0],
                gameState.boardState.currentMove[1]);
            newMoves.unshift(newMove);
            setMoves(newMoves);
        }
    }, [gameState]);

    // on game state update, check if there is a winner
    useEffect(() => {
        const newGameState = {... gameState};
        
        const winData = determineWinnerData(
            gameState, 
            newGameState.boardState.board
        );

        if (Object.keys(winData).length > 0)
        {
            // we have a winner!
            const winCharReplacement = winData.winChar;
            const winner = winData.player;
            const coords = winData.moveArray;

            newGameState.boardState.winner = winner;
            coords.forEach( (coord : number[]) => {
                newGameState.boardState.board[coord[0]][coord[1]] = `${winCharReplacement} ${winner}` ;
            });
            setGameState(newGameState);
        }
    }, [gameState.boardState.board]);

    return(
        <PageBaseLayout>
            <Container className={styles.ttcRootContainer}>
                <Row>
                    <Col>
                        <GameBoard gameState={gameState} onMoveInput={handleMoveInput}></GameBoard>
                    </Col>
                    <Col className={styles.moveHistoryCenter}>
                        <MoveHistory gameState={gameState} moves={moves}></MoveHistory>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 2, offset: 6 }}>
                        <Button type="button" onClick={() => resetState()}>Restart</Button>
                    </Col>
                </Row>
            </Container>
        </PageBaseLayout>
    )
}

export default TicTacToe;