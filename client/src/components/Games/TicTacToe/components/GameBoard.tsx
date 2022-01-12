import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { IGameBoardProps } from '../types';

function GameBoard({gameState, onMoveInput} : IGameBoardProps) {
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
                                onClick={() => onMoveInput(
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