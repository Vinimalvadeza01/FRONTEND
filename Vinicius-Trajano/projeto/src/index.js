import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Perfil from './pages/perfil/informacoes-de-usuario';
import Endereco from './pages/perfil/informacoes-de-endereco'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/perfil' exact={true} element={<Perfil/>} ></Route>
        <Route path='/perfil/informacoes-de-endereco' element={<Endereco/>} ></Route> 
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


