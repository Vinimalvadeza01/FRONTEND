import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import HomeDm from './pages/homeDm';
import Endereco from './pages/endereco/index';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact={true} element={<Login/>}></Route>
        <Route path="/Cadastro" element={<Cadastro/>}></Route>
        <Route path="/PaginaAdministrador" element={<HomeDm/>}></Route>
        <Route path='/Endereco' element={<Endereco/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

