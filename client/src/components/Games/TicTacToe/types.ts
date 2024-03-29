export interface IMove {
    player: string;
    row: number;
    col: number;
    uuid: string;
  }

export type Board = string[][];

export interface IBoardState {
    currentPlayer: string,
    previousPlayer: string,
    currentMove: number[],
    board: Board,
    winner: string
}

// Use an Index Signature for the player key
// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
export interface IPlayers {
    [key: string]: string
}

export interface IPlayerMarkers {
    [key: string]: string
}

export interface IGameState {
    players: IPlayers,
    playerNames: IPlayers,
    boardState: IBoardState,
    sessionID: string
}

// Winner data can be empty
export interface IWinnerData {
    winChar?: string,
    player?: string,
    moveArray?: number[][]
}

export interface IMoveHistoryProps {
    gameState: IGameState,
    moves: IMove[]
}

export interface IGameBoardProps {
    gameState: IGameState,
    onMoveInput : (currentPlayer: string, moveRow: number, moveCol: number) => void
}