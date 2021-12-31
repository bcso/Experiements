import React from 'react';
import {Container, Row} from 'react-bootstrap';

function MoveHistory({gameState, moves}){
    return(
        <>
        <Container>
            <Row><p>Current Player : {`${gameState.boardState.currentPlayer} (${gameState.players[gameState.boardState.currentPlayer]})`}</p></Row>
            <Row><p>Winner: {`${gameState.boardState.winner}`}</p></Row>
            <Row><p>Moves:</p></Row>
            {moves.map(m => {
                return (<Row key={m.uuid}>
                    <h6 className='lead'> {`${m.player}: row: ${m.row} col: ${m.col}`} </h6>
                </Row>);
            })}
            
        </Container>
        </>
    )
}

export default MoveHistory;