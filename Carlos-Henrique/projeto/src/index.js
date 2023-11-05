import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import CadastrarProduto from './pages/adm/cadastroProduto';
import ProdutoCadastrado from './pages/adm/produtoCadastrado';
import ConsultaAdmProdutos from './pages/adm/consultaProduto';
import ConsultaAdmClientes from './pages/adm/consultaCliente';
import ProdutoAdm from './pages/adm/produto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' exact={true} element={<Home/>}></Route>

        <Route path='/adm/cadastrar-produto' exact={true} element={<CadastrarProduto/>}></Route>
        <Route path='/adm/produto-cadastrado' exact={true} element={<ProdutoCadastrado/>}></Route>
        <Route path='/adm/consulta/produtos' exact={true} element={<ConsultaAdmProdutos/>}></Route>
        <Route path='/adm/consulta/clientes' exact={true} element={<ConsultaAdmClientes/>}></Route>
        <Route path='/adm/produto/:id' exact={true} element={<ProdutoAdm/>}></Route>
        <Route path="/Cadastro" element={<Cadastro/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

