import { Coord, IEmpty, ISnakeBoardProps } from "../types";

export function initSnakeGameBoard() : ISnakeBoardProps {

    const snakeCoordinates : Array<Coord> = [[0,0], [0,1], [0,2]];
    const foodCoordinates : Array<Coord>  = [[2,2]];
    const obstaclesCoordiinates : Array<Coord> = [[3,3]];
    const vSize : number = 15;
    const hSize : number = 10;

    const emptyCoordinates : Array<Coord> = [];

    for (let i=0; i<vSize; i++)
    {
        for (let j=0; j<hSize; j++)
        {
            const candidate : Coord = [i,j];
            if (!snakeCoordinates.includes(candidate) && 
                !foodCoordinates.includes(candidate) && 
                !obstaclesCoordiinates.includes(candidate))
            {
                emptyCoordinates.push([i,j]);
            }
        }
    }

    return {
        vSize : vSize,
        hSize : hSize,
        currentDirection : [0 , 1],
        gameWin: false,
        snake: {
            coordinates : snakeCoordinates,
            aliveState : true
        },
        food : {
            coordinates : foodCoordinates,
            consumed : false
        },
        obstacles : {
            coordinates : obstaclesCoordiinates
        },
        emptySpaces : {
            coordinates : emptyCoordinates
        }

    }
}