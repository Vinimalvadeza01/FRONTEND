import { useState } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';

export default function CabecalhoAdm(){

    const[mostrarMenu,setMostrarMenu]=useState(false);

    return(

        <header className='cabecalho-adm'>

            <Link to='/adm'>
                <img src='/assets/images/logo.png' alt='logo' id='logo'/>
            </Link>

            <div className='container-adm-header'>

                <svg id='user-icon' width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 16.5C15.546 16.5 17.5081 15.6308 18.9548 14.0836C20.4015 12.5365 21.2143 10.438 21.2143 8.25C21.2143 6.06196 20.4015 3.96354 18.9548 2.41637C17.5081 0.869194 15.546 0 13.5 0C11.454 0 9.49189 0.869194 8.04518 2.41637C6.59847 3.96354 5.78571 6.06196 5.78571 8.25C5.78571 10.438 6.59847 12.5365 8.04518 14.0836C9.49189 15.6308 11.454 16.5 13.5 16.5ZM10.7458 19.5938C4.80938 19.5938 0 24.7371 0 31.0857C0 32.1428 0.801563 33 1.78996 33H25.21C26.1984 33 27 32.1428 27 31.0857C27 24.7371 22.1906 19.5938 16.2542 19.5938H10.7458Z" fill="#619853" />
                </svg>
                <span>Você está logado como administrador</span>
                
            </div>

            <div className='container-patinhas-adm'>
                <img src='/assets/images/patinhas.png' alt='patinhas de enfeite' id='patinhas' />

                <button className='mostrar-menu-adm' onClick={() => {setMostrarMenu(true)}}>

                    <h4>Menu</h4>
                    <svg width="35" height="25" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.5C0 1.11719 1.27679 0 2.85714 0H37.1429C38.7232 0 40 1.11719 40 2.5C40 3.88281 38.7232 5 37.1429 5H2.85714C1.27679 5 0 3.88281 0 2.5ZM0 15C0 13.6172 1.27679 12.5 2.85714 12.5H37.1429C38.7232 12.5 40 13.6172 40 15C40 16.3828 38.7232 17.5 37.1429 17.5H2.85714C1.27679 17.5 0 16.3828 0 15ZM40 27.5C40 28.8828 38.7232 30 37.1429 30H2.85714C1.27679 30 0 28.8828 0 27.5C0 26.1172 1.27679 25 2.85714 25H37.1429C38.7232 25 40 26.1172 40 27.5Z" fill="#619853"/>
                    </svg>
                </button>
            </div>
            
            <nav className={mostrarMenu ? 'menu-adm mostrar' : 'menu-adm esconder'}>

                <div id='mensagem-boas-vindas-usuario'>Bem-vindo <br/> @user
                
                    <button className='botao-fechar-menu' onClick={() => {setMostrarMenu(false)}}>
                        <svg width="18" height="36" viewBox="0 0 88 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M86.3001 13.5974C88.8895 10.0762 88.477 4.84631 85.3606 1.92065C82.2443 -1.005 77.6156 -0.53897 75.0262 2.98217L44 45.0546L12.9738 2.98217C10.3845 -0.53897 5.75573 -1.005 2.63936 1.92065C-0.477012 4.84631 -0.889473 10.0762 1.69986 13.5974L34.4447 58L1.69986 102.403C-0.889473 105.924 -0.477012 111.154 2.63936 114.079C5.75573 117.005 10.3845 116.539 12.9738 113.018L44 70.9454L75.0262 113.018C77.6156 116.539 82.2443 117.005 85.3606 114.079C88.477 111.154 88.8895 105.924 86.3001 102.403L53.5553 58L86.3001 13.5974Z" fill="#183D0A"/>
                        </svg>
                    </button>
                </div>
                <hr/>

                <Link to='/adm/cadastrar-produto' className='Link botao-menu-adm'>
                    <span>Cadastrar produtos</span>
                </Link>

                <button className='button-consulta'>
                    <span>Consultar Informações</span>
                    
                    <svg width="12" height="20" viewBox="0 0 38 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.1453 35.9497C38.6182 33.4898 38.6182 29.4949 36.1453 27.035L10.8218 1.84548C9.00169 0.0349857 6.29129 -0.496356 3.91722 0.487609C1.54315 1.47157 0 3.75437 0 6.31268V56.6917C0 59.2303 1.54315 61.5328 3.91722 62.5167C6.29129 63.5007 9.00169 62.9497 10.8218 61.1589L36.1453 35.9694V35.9497Z"/>
                    </svg>

                    <div className='container-consulta'>

                        <Link className='Link botao-historico' to='/adm/consulta/produtos'>Produtos</Link>
                        <Link className='Link botao-historico' to='/adm/consulta/clientes'>Clientes</Link>
                        <Link className='Link botao-historico' to='/adm/consulta/pedidos'>Pedidos</Link>
                    </div>
                </button>

                <Link to='/adm/graficos' className='Link botao-menu-adm'>
                    <span>Análise de gráficos</span>
                </Link>
            </nav>
        </header>
    );
}