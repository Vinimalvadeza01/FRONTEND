import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Login from './pages/login';
import {BrowserRouter,Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

