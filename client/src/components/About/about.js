import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function About() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>This is the about page</h2>
        <Link to="/"> <Button> Home </Button> </Link>
      </main>
    );
}

export default About;