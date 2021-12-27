const React = require('react');
import { Outlet, Link } from 'react-router-dom';
import styles from './App.css';

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';

function App(){
    return(
        <div className={styles.introPageRoot}>
            <Container className={styles.introPageContainer} fluid>
                <Row className={styles.introPageTitle}>
                    <Col> <h1>Game App</h1> </Col>
                </Row>
                <Row className={styles.introPageButtonNav}>
                    <Col xs="auto">
                        <Link to="/toe">
                            <Button size='lg'> TicTacToe </Button>
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/chat">
                            <Button size='lg'> Chat Room </Button>
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to="/about">
                            <Button size='lg'> About </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;