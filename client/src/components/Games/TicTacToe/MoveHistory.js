import React from 'react';
import {Container, Row} from 'react-bootstrap';

function MoveHistory({gameState, moves}){
    return(
        <>

        <div>
          Current Player : {`${gameState.boardState.currentPlayer} (${gameState.players[gameState.boardState.currentPlayer]})`}
        </div>

        <Container>
            <Row>~Moves~</Row>
            {moves.map(m => {
                return (<Row key={m}>{`${m[0]}: row: ${m[1]} col: ${m[2]}`}</Row>);
            })}
        </Container>
        </>
    )
}

export default MoveHistory;