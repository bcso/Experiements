import { Coord, IEmpty, ISnakeBoardProps } from "../types";

export function getCoordsFromDrawnBoard()
{
    const drawnBoard : Array<Array<string>> = [
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","f","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","s","s","s","s","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","o","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",]
    ]

    const snakeCoordinates : Array<Coord> = findInBoard(drawnBoard, "s");
    const foodCoordinates : Array<Coord> = findInBoard(drawnBoard, "f");
    const obstaclesCoordinates : Array<Coord> = findInBoard(drawnBoard, "o");
    const emptyCoordinates : Array<Coord> = findInBoard(drawnBoard, "");

    const vSize : number = drawnBoard.length;
    const hSize : number = drawnBoard[0].length;

    function findInBoard(board : Array<Array<string>>, target : string) : Array<Coord>
    {
        const out : Array<Coord> = [];

        for (let r = 0; r <board.length; r++)
        {
            for (let c = 0; c <board[0].length; c++)
            {
                if (drawnBoard[r][c] == target) out.push([r,c]);
            }
        }

        return out;
    }

    return {
        vSize, hSize, snakeCoordinates, foodCoordinates, obstaclesCoordinates, emptyCoordinates
    }
}

function getEmptyCellsWithKnowns(
    snakeCoordinates : Array<Coord>,
    foodCoordinates : Array<Coord>,
    obstaclesCoordiinates : Array<Coord>,
    vSize : number,
    hSize : number
) {
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

    return emptyCoordinates;
}

export function initSnakeGameBoard() : ISnakeBoardProps {

    const coords = getCoordsFromDrawnBoard();
    const snakeCoordinates : Array<Coord> = coords.snakeCoordinates;
    const foodCoordinates : Array<Coord>  = coords.foodCoordinates;
    const obstaclesCoordiinates : Array<Coord> = coords.obstaclesCoordinates;
    const emptyCoordinates : Array<Coord> = coords.emptyCoordinates;
    const vSize : number = coords.vSize;
    const hSize : number = coords.hSize;

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