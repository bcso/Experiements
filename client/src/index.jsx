import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TicTacToe from './components/Games/TicTacToe/tictactoe';
import About from './components/About/about';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}> </Route>
            <Route path="ttc" element={<TicTacToe/>} />
            <Route path="about" element={<About />} />
            
            {/* Navigate back to home for any routes we don't recognize */}
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);