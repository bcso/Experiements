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

export {generateDefaultGameState, generateDefaultMoves};