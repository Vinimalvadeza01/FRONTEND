import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoginAdm from './pages/loginAdm';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/loginAdm" element={<LoginAdm/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);


