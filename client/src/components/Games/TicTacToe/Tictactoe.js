import React, {useEffect, useState} from 'react';
import PageBaseLayout from '../../common/PageBaseLayout';
import GameBoard from './GameBoard';
import MoveHistory from './MoveHistory';

const defaultGameState = {
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

// [["P1",0,0], ["P2", 0, 1]]
const defaultMoves = [];

function TicTacToe() {

    const [gameState, setGameState] = useState(defaultGameState);
    const [moves, setMoves] = useState(defaultMoves);

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
            <div>I'm the toe bits!</div>
            <GameBoard gameState={gameState} onMoveInput={handleMoveInput}></GameBoard>
            <MoveHistory gameState={gameState} moves={moves}></MoveHistory>
        </PageBaseLayout>
    )
}

export default TicTacToe;