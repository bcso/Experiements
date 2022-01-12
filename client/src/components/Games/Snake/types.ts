export type Vector = [number, number];
export type Coord = [number, number];
export type Coordinates = Array<Coord>;

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
    coordinates : Coordinates;
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