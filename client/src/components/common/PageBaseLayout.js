import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import styles from './PageBaseLayoutStyles.css';

function PageBaseLayout({children}) {
    return(
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ttc">
                        <Nav.Link>TTC</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div className={styles.contentRootContainer}>{children}</div>
        </>
    )
}

export default PageBaseLayout;