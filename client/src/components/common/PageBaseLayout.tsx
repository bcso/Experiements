import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import styles from './PageBaseLayout.module.css';
import { IPageBaseLayoutProps } from './types';

function PageBaseLayout({children} : IPageBaseLayoutProps) {
    return(
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Experiements</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/toe">
                        <Nav.Link>Toe</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/snake">
                        <Nav.Link>Snake</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/todo">
                        <Nav.Link>Todo</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/chat">
                        <Nav.Link>Chat</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div className={styles.contentRootContainer}>
                {children}
            </div>
        </>
    )
}

export default PageBaseLayout;