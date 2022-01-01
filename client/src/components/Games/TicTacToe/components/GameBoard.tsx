import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { IGameBoardProps } from '../helpers/types';

function GameBoard({gameState, onMoveInput} : IGameBoardProps) {

    function handleInput(
        player: string, 
        moveRow: number, 
        moveCol: number) : void
    {
        onMoveInput(player, moveRow, moveCol);
    }

    return (
        <>
        <Container>
            {gameState.boardState.board.map((r : string[], rowIdx : number)=>{
                return( 
                    <Row key={rowIdx}>
                        {r.map((c, colIdx : number) => {
                            return (
                            <Col key={colIdx}
                                style={{cursor: "pointer"}} 
                                onClick={() => handleInput(
                                    gameState.boardState.currentPlayer, 
                                    rowIdx, 
                                    colIdx)}
                            > 
                                {gameState.boardState.board[rowIdx][colIdx]} 
                            </Col>);
                        })}
                    </Row>
                );
            })}
        </Container>
        </>
    )
}

export default GameBoard;