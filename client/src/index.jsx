import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TickTacToe from './components/Games/tictactoe';
import About from './components/Games/about';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="ttc" element={<TickTacToe/>} />
                <Route path="about" element={<About />} />
            </Route>
            
            {/* Navigate back to home for any routes we don't recognize */}
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);