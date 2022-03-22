
// Vector type is a cartesian unit vector : [y,x]
// [0,1] -> "right"
// [-1,0] -> "down"
// [0,-1] -> "left"
// [1,0] -> "up"
export type Vector = [number, number];
export type DirectionString = string;
// Vector type is a cartesian coordinate : [y,x]
export type Coord = [number, number];
export type Coordinates = Array<Coord>;

export enum Direction
{
    Up = "Up",
    Down = "Down",
    Right = "Right",
    Left = "Left"
}

export interface IKeypadProps 
{
    onKeypadPress: (d : Direction) => void;
}

export interface IGameState
{

}

export interface ISnakeBoardProps {
    vSize : number,
    hSize : number,
    gameWin : boolean,
    snake: ISnake,
    food: IFood,
    obstacles?: IObstacles,
    emptySpaces: IEmpty,
    didGameStart: boolean,
    currentDirection : Direction;
}

export interface ICell {
    coordinates : Coordinates;
}

export interface IObstacles extends ICell {

}

export interface IFood extends ICell {
    consumed : boolean;
}

export interface ISnake extends ICell {
    aliveState: boolean;
    head: Coord;
    tail: Coord;
    snakeLen: number;
}

export interface IEmpty extends ICell {

}