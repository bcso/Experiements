# Snake

Game page has following:
    Board
    Keystroke input (UDLR)
        - Accepts keyboard input
            - Keyboard input will lightup the keyboard asset
        - Accepts click input

Board has the following:
    m x n Cells, each cell can be:
        Snake
        Food -> can be eaten
        Obstacle
        Empty

## Interfaces to show connections

``` typescript
export type Vector = [number, number];
export type Coord = [number, number];

export interface IGameState
{

}

export interface ISnakeBoardProps {
    vSize : number,
    hSize : number,
    currentDirection : Vector, // Direction of the head
    gameWin : boolean,
    snake: ISnake,
    food: IFood,
    obstacles?: IObstacles,
    emptySpaces: IEmpty
}

export interface ICell {
    coordinates : Array<Coord>;
}

export interface IObstacles extends ICell {

}

export interface IFood extends ICell {
    consumed : boolean;
}

export interface ISnake extends ICell {
    aliveState: boolean;
}

export interface IEmpty extends ICell {

}

```