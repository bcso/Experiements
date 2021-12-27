import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

function GameBoard({gameState, onMoveInput}) {

    function handleInput(player, moveRow, moveCol) {
        onMoveInput(player, moveRow, moveCol);
    }

    return (
        <>
        <Container>
            {gameState.boardState.board.map((r, rowIdx)=>{
                return( 
                    <Row key={rowIdx}>
                        {r.map((c, colIdx) => {
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