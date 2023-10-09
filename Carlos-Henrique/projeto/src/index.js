import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import CadastrarProduto from './pages/adm/cadastroProduto';
import ProdutoCadastrado from './pages/adm/produtoCadastrado';
import ConsultaAdm from './pages/adm/consulta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' exact={true} element={<Home/>}></Route>
        <Route path='/adm/cadastrar-produto' exact={true} element={<CadastrarProduto/>}></Route>
        <Route path='/adm/produto-cadastrado' exact={true} element={<ProdutoCadastrado/>}></Route>
        <Route path='/adm/consulta' exact={true} element={<ConsultaAdm/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

