import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoginAdm from './pages/loginAdm';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import CadastrarProduto from './pages/cadastroProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/adm/login" element={<LoginAdm/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/adm/cadastrar-produto' element={<CadastrarProduto/>}></Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);


