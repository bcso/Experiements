import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { playerMarkers } from '../helpers/helpers';
import { IMoveHistoryProps } from '../helpers/types';

function MoveHistory({gameState, moves} : IMoveHistoryProps){
    return(
        <>
        <Container>
            <Row><p>Current Player : {`${gameState.boardState.currentPlayer} (${playerMarkers[gameState.boardState.currentPlayer]})`}</p></Row>
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