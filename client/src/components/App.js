const React = require('react');
import { Outlet, Link } from 'react-router-dom';
import styles from '../styles.css';

function App(){
    return(
    <div>
        <div className={styles.introTitle}> I'm a Game app! Click below to navigate to your game. </div>

        <Link to="/ttc"> TicTacToe </Link>
        <Link to="/about"> About </Link>
        <Link to="/about"> About </Link>
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
            }}
        />

        <Outlet />

        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
            }}
        />
        <Link to="/"> Home </Link>
    </div>
    )
}

export default App;