import React, {useEffect, useState} from 'react';
import PageBaseLayout from '../../common/PageBaseLayout';
import GameBoard from './GameBoard';
import MoveHistory from './MoveHistory';
import {Container, Row, Col, Button} from 'react-bootstrap';
import styles from './TicTacToe.css';

function generateDefaultGameState() {
    return {
    players : {
        P1: "X",
        P2: "O"
    },
    boardState: {
      currentPlayer: "P1",
      previousPlayer: "",
      currentMove: [],
      board: [
          ["*","*","*"],
          ["*","*","*"],
          ["*","*","*"]
        ],
      winner: ""
    },
    sessionID: "gameName0"
  }
}

// [["P1",0,0], ["P2", 0, 1]]
function generateDefaultMoves() {
    return [];
}

function TicTacToe() {

    // Make sure we use new references as initial states;
    const [gameState, setGameState] = useState(generateDefaultGameState());
    const [moves, setMoves] = useState(generateDefaultMoves());

    function resetState()
    {
        setMoves(generateDefaultMoves());
        setGameState(generateDefaultGameState());
    }

    function handleMoveInput(player, moveRow, moveCol) {
        // Update our board with the new move

        // Input validation, make sure the cell is unused
        if (gameState.boardState.board[moveRow][moveCol] !== '*') return;

        const newBoard = [... gameState.boardState.board];
        newBoard[moveRow][moveCol] = gameState.players[player];

        const newGameState = {... gameState};
        newGameState.boardState.board = newBoard;

        // Update the current player
        const currentPlayer = gameState.boardState.currentPlayer;

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
        console.log("effect used");
        if (prevPlayer !== "")
        {
            const newMoves = [... moves];
            newMoves.unshift([
                prevPlayer,
                gameState.boardState.currentMove[0],
                gameState.boardState.currentMove[1]
            ]);
            setMoves(newMoves);
        }
    }, [gameState]);

    return(
        <PageBaseLayout pageTitle="TicTacToe">
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