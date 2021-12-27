const React = require('react');
import { Outlet, Link } from 'react-router-dom';
import styles from '../styles.css';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';

function App(){
    return(
        <Container className={styles.introPageContainer} fluid>
            <Row className={styles.introPageTitle}>
                <Col> <h1>Game App</h1> </Col>
            </Row>
            <Row className={styles.introPageButtonNav}>
                <Col xs="auto">
                    <Link to="/ttc">
                        <Button> TicTacToe </Button>
                    </Link>
                </Col>
                <Col xs="auto">
                    <Link to="/about">
                        <Button> Chat Room </Button>
                    </Link>
                </Col>
                <Col xs="auto">
                    <Link to="/about">
                        <Button> About </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default App;