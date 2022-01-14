import { Coord, Coordinates, ISnakeBoardProps, Vector } from "../types";

// Quick way to generate the initial
//      snake
//      food
//      obstacle
//      empty
// coordinates. Modify drawnBoard to reflect the initial state of your board
// the game will start with this
export function getCoordsFromDrawnBoard()
{
    const drawnBoard : Array<Array<string>> = [
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","f","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","s","s","s","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","o","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",],
        ["","","","","","","","","","","",]
    ]

    const snakeCoordinates : Coordinates = findInBoard(drawnBoard, "s");
    const foodCoordinates : Coordinates = findInBoard(drawnBoard, "f");
    const obstaclesCoordinates : Coordinates = findInBoard(drawnBoard, "o");
    const emptyCoordinates : Coordinates = findInBoard(drawnBoard, "");

    const vSize : number = drawnBoard.length;
    const hSize : number = drawnBoard[0].length;

    function findInBoard(board : Array<Array<string>>, target : string) : Coordinates
    {
        const out : Coordinates = [];

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

// In case we wanted to input our sparse snake, food and obstacles directly we can use this
// to calculate the remainder empty spaces
function getEmptyCellsWithKnowns(
    snakeCoordinates : Coordinates,
    foodCoordinates : Coordinates,
    obstaclesCoordinates : Coordinates,
    vSize : number,
    hSize : number
) {
    const emptyCoordinates : Coordinates = [];

    for (let i=0; i<vSize; i++)
    {
        for (let j=0; j<hSize; j++)
        {
            const candidate : Coord = [i,j];
            if (!snakeCoordinates.includes(candidate) && 
                !foodCoordinates.includes(candidate) && 
                !obstaclesCoordinates.includes(candidate))
            {
                emptyCoordinates.push([i,j]);
            }
        }
    }

    return emptyCoordinates;
}

export function initSnakeGameBoard() : ISnakeBoardProps {
    const coords = getCoordsFromDrawnBoard();
    const snakeCoords : Coordinates = coords.snakeCoordinates;
    const foodCoords : Coordinates  = coords.foodCoordinates;
    const obstacleCoords : Coordinates = coords.obstaclesCoordinates;
    const emptyCoords : Coordinates = coords.emptyCoordinates;
    const vSize : number = coords.vSize;
    const hSize : number = coords.hSize;

    return {
        vSize : vSize,
        hSize : hSize,
        gameWin: false,
        snake: {
            coordinates : snakeCoords,
            aliveState : true
        },
        food : {
            coordinates : foodCoords,
            consumed : false
        },
        obstacles : {
            coordinates : obstacleCoords
        },
        emptySpaces : {
            coordinates : emptyCoords
        }
    }
}

export function initVector() : Vector{
    const initDirection : Vector  = [0, 1];
    return initDirection;
}