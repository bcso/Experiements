import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TicTacToe() {
    return(
        <div>
            This is the tic tac toe game.
            <Link to="/"> <Button> Home </Button> </Link>
        </div>
    )
}

export default TicTacToe;