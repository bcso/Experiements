const _winningCharReplacements = {
  hWinnerChar : '-',
  vWinnerChar : '|',
  d1WinnerChar: '\\',
  d2WinnerChar: '/'
}

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

function determineWinnerCoords(gameState, board)
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
            return [_winningCharReplacements.vWinnerChar, 
              board[0][i] === gameState.players.P1 ? 
                gameState.players.P1 : gameState.players.P2, 
              [0,i], [1,i], [2,i]];
        }

        if (board[i][0] === board[i][1] && 
            board[i][0] === board[i][2] && 
            ( board[i][0] === gameState.players.P1 || 
                board[i][0] === gameState.players.P2)
            )
        {
            return [_winningCharReplacements.hWinnerChar, 
              board[i][0] === gameState.players.P1 ? 
                gameState.players.P1 : gameState.players.P2,
              [i,0], [i,1], [i,2]];
        }        
    }

    // Check Diags
    if (board[0][0] === board[1][1] && 
        board[0][0] === board[2][2] && 
        ( board[0][0] === gameState.players.P1 || 
            board[0][0] === gameState.players.P2)
        )
    {
        return [_winningCharReplacements.d1WinnerChar, 
          board[0][0] === gameState.players.P1 ? 
            gameState.players.P1 : gameState.players.P2,
          [0,0], [1,1], [2,2]];
    }

    if (board[0][2] === board[1][1] && 
        board[0][2] === board[2][0] && 
        ( board[0][2] === gameState.players.P1 || 
            board[0][2] === gameState.players.P2)
        )
    {
        return [_winningCharReplacements.d2WinnerChar, 
          board[0][2] === gameState.players.P1 ? 
            gameState.players.P1 : gameState.players.P2,
          [0,2], [1,1], [2,0]];
    }

    return [];
}

export {generateDefaultGameState, generateDefaultMoves, determineWinnerCoords};