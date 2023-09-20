import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser} from 'react-icons/fa';

export default function CabecalhoAdm() {


    return (

        <header className='cabecalho'>

            <img src='/assets/images/logo.png' alt='logo' id='logo' />

            <div className='container-header'>

                <div className='container-infs'>
                    
                </div>

            <div className='admin'>
                <FaUser/>
                <h4>Você está na página de administrador</h4>
            </div>
              
            </div>

            <div className='container-para-mobile'>
                <img src='/assets/images/patinhas.png' alt='patinhas de enfeite' id='patinhas' />

                <button className='mobile-menu'>
                    <svg width="35" height="25" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.5C0 1.11719 1.27679 0 2.85714 0H37.1429C38.7232 0 40 1.11719 40 2.5C40 3.88281 38.7232 5 37.1429 5H2.85714C1.27679 5 0 3.88281 0 2.5ZM0 15C0 13.6172 1.27679 12.5 2.85714 12.5H37.1429C38.7232 12.5 40 13.6172 40 15C40 16.3828 38.7232 17.5 37.1429 17.5H2.85714C1.27679 17.5 0 16.3828 0 15ZM40 27.5C40 28.8828 38.7232 30 37.1429 30H2.85714C1.27679 30 0 28.8828 0 27.5C0 26.1172 1.27679 25 2.85714 25H37.1429C38.7232 25 40 26.1172 40 27.5Z" fill="#619853"/>
                    </svg>
                </button>
            </div>
            

        </header>
    );
}