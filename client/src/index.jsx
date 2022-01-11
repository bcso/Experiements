import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TicTacToe from './components/Games/TicTacToe/components/Tictactoe';
import ChatApp from './components/Games/ChatApp/ChatApp';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snake from './components/Games/Snake/components/Snake';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}> </Route>
            <Route path="toe" element={<TicTacToe/>} />
            <Route path="chat" element={<ChatApp/>} />
            <Route path="snake" element={<Snake/>} />
            <Route path="about" element={<About />} />
            
            {/* Navigate back to home for any routes we don't recognize */}
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);