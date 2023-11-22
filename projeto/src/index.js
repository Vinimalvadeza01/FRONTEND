import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Produtos from './pages/produtos';
import ProdutoClientes from './pages/produto-cliente';
import Pagamento from './pages/pagamento';

import LoginAdm from './pages/adm/loginAdm';
import HomeAdm from './pages/adm/homeAdm';
import CadastrarProduto from './pages/adm/cadastroProduto';
import ProdutoCadastrado from './pages/adm/produtoCadastrado';
import ConsultaAdmProdutos from './pages/adm/consultaProduto';
import ProdutoAdm from './pages/adm/produto';
import ConsultaAdmClientes from './pages/adm/consultaCliente';

// Importando páginas do trajanilson
import Perfil from './pages/perfil/informacoes-de-usuario';
import Endereco from './pages/perfil/informacoes-de-endereco';
import Favoritos from './pages/perfil/favoritos';
import Pedidos from './pages/perfil/pedidos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' exact={true} element={<Home/>}></Route>
        <Route path='/Cadastro' exact={true} element={<Cadastro/>}></Route>
        <Route path='/login' exact={true} element={<Login/>}></Route>
        <Route path='/produtos' exact={true} element={<Produtos/>}></Route>
        <Route path='/produto/cliente' exact={true} element={<ProdutoClientes/>}></Route>
        <Route path='/pagamento' exact={true} element={<Pagamento/>}></Route>


        {/* Páginas do trajanilson */}
        <Route path='/perfil' exact={true} element={<Perfil/>} ></Route>
        <Route path='/perfil/informacoes-de-endereco' element={<Endereco/>} ></Route> 
        <Route path='/perfil/favoritos' element={<Favoritos/>}></Route> 
        <Route path='perfil/pedidos' element={<Pedidos/>}></Route>

        <Route path='/adm' exact={true} element={<HomeAdm/>}></Route>
        <Route path='/adm/cadastrar-produto' exact={true} element={<CadastrarProduto/>}></Route>
        <Route path='/adm/produto-cadastrado' exact={true} element={<ProdutoCadastrado/>}></Route>
        <Route path='/adm/consulta/produtos' exact={true} element={<ConsultaAdmProdutos/>}></Route>
        <Route path='/adm/consulta/clientes' exact={true} element={<ConsultaAdmClientes/>}></Route>
        <Route path='/adm/produto/:id' exact={true} element={<ProdutoAdm/>}></Route>
        <Route path='/adm/login' exact={true} element={<LoginAdm/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

