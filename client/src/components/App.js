const React = require('react');
import { Outlet, Link } from 'react-router-dom';

function App(){
    return(
    <div>
        <h1> I'm a Game app! Click below to navigate to your game. </h1>

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