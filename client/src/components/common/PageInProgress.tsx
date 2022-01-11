import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './PageInProgress.module.css';
import { IPageInProgressProps } from "./types";

function PageInProgress({pageTitle, pageDescription} : IPageInProgressProps){
    return (
        <Container className={styles.pageContainer} fluid>
            <Row className={styles.pageTitle}>
                <Col> <h1 className='display-4'>{pageTitle}</h1> </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className='lead text-muted'> {pageDescription} </h6>
                </Col>
            </Row>
        </Container>
    )
}

export default PageInProgress;