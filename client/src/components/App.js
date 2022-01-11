const React = require('react');
import { Outlet, Link } from 'react-router-dom';
import styles from './App.css';

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import PageBaseLayout from './common/PageBaseLayout';

function App(){
    return(
        <PageBaseLayout>
            <div className={styles.introPageRoot}>
                <Container className={styles.introPageContainer} fluid>
                    <Row className={styles.introPageTitle}>
                        <Col> <h1 className='display-1'>Experiments</h1> </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 className='lead text-muted'> Some Experiements above... click on them and try.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </PageBaseLayout>
    )
}

export default App;