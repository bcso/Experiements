import { Move } from "./Move";
import { IGameState, IWinnerData } from "./types";

const _winningCharReplacements = {
  hWinnerChar : '-',
  vWinnerChar : '|',
  d1WinnerChar: '\\',
  d2WinnerChar: '/'
}

// Default schema for gameState state
// Serves as model as well
function generateDefaultGameState() : IGameState {
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
function generateDefaultMoves() : Move[] {
    return [];
}

function determineWinnerData(gameState : IGameState, board : string[][]) : IWinnerData
{
    // Check horizontals + Verts
    for (let i=0; i<3; i++)
    {
        if (board[0][i] === board[1][i] && 
            board[0][i] === board[2][i] && 
            ( board[0][i] === gameState.players.P1 || 
              board[0][i] === gameState.players.P2)
            )
        {
          return {
            winChar: _winningCharReplacements.vWinnerChar,
            player: board[0][i] === gameState.players.P1 ? 
            gameState.players.P1 : gameState.players.P2,
            moveArray: [[0,i], [1,i], [2,i]]
          };
        }

        if (board[i][0] === board[i][1] && 
            board[i][0] === board[i][2] && 
            ( board[i][0] === gameState.players.P1 || 
                board[i][0] === gameState.players.P2)
            )
        {
          return {
            winChar: _winningCharReplacements.hWinnerChar,
            player: board[i][0] === gameState.players.P1 ? 
            gameState.players.P1 : gameState.players.P2,
            moveArray: [[i,0], [i,1], [i,2]]
          };
        }        
    }

    // Check Diags
    if (board[0][0] === board[1][1] && 
        board[0][0] === board[2][2] && 
        ( board[0][0] === gameState.players.P1 || 
            board[0][0] === gameState.players.P2)
        )
    {
      return {
        winChar: _winningCharReplacements.d1WinnerChar,
        player: board[0][0] === gameState.players.P1 ? 
        gameState.players.P1 : gameState.players.P2,
        moveArray: [[0,0], [1,1], [2,2]]
      };
    }

    if (board[0][2] === board[1][1] && 
        board[0][2] === board[2][0] && 
        ( board[0][2] === gameState.players.P1 || 
            board[0][2] === gameState.players.P2)
        )
    {
      return {
        winChar: _winningCharReplacements.d2WinnerChar,
        player: board[0][2] === gameState.players.P1 ? 
        gameState.players.P1 : gameState.players.P2,
        moveArray: [[0,2], [1,1], [2,0]]
      };
    }

    return {};
}

export {generateDefaultGameState, generateDefaultMoves, determineWinnerData};