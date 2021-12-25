import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TickTacToe from './components/Games/tictactoe';
import About from './components/Games/about';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="ttc" element={<TickTacToe/>} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);