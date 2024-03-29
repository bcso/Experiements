import { Coord, Coordinates, ISnakeBoardProps, Vector, Direction } from "../types";

export const vectorStringMap : {[k in Direction] : Vector} = {
    "Up" : [-1,0],
    "Down": [1,0],
    "Right": [0,1],
    "Left": [0,-1]
}

// Quick way to generate the initial
//      snake
//      food
//      obstacle
//      empty
// coordinates. Modify drawnBoard to reflect the initial state of your board
// the game will start with this
export function getCoordsFromDrawnBoard()
{

    /** Board coordinates:
     * 0 1 2 3
     * 1
     * 2
     * 3
     */
    const drawnBoard : Array<Array<string>> = [
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","f","","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","s","s","s","s","s","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","o","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","","o","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","",""],
        ["","","","","","","","","","","","","","",""]
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

/**
 * 
 * @param dOld Old Direction
 * @param dNew New Direction
 * @returns boolean : whether or not the new direction is valid, given the old and current direction
 * We should never let the snake move backwards into itself
 */
export function isValidNewDirection(dOld : Direction, dNew : Direction)
{
    if (dOld === Direction.Down && dNew === Direction.Up ||
        dOld === Direction.Up && dNew === Direction.Down ||
        dOld === Direction.Right && dNew === Direction.Left || 
        dOld === Direction.Left && dNew === Direction.Right)
        {
            return false;
        }
    return true;
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

export function coordsContainsTarget(parent : Coordinates, target : Coord) : boolean
{
    for (let idx=0; idx<parent.length; idx++)
    {
        if (parent[idx][0] == target[0] &&
            parent[idx][1] == target[1]) return true;
    }
    return false;
}

export function initSnakeGameBoardState() : ISnakeBoardProps {
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
        gameWin: undefined,
        snake: {
            coordinates : snakeCoords,
            aliveState : true,
            head : snakeCoords[snakeCoords.length - 1],
            tail : snakeCoords[0]
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
        },
        isGameOngoing : false,
        currentDirection : undefined
    }
}