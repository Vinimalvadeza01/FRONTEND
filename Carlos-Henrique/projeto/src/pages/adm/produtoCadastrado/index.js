import './index.scss';

import CabecalhoAdm from '../../../components/cabecalho-adm';

import { Link } from 'react-router-dom';

export default function pageProdutoCadastrado(){

    return(

        <div className='page-produto-cadastrado'>

            <CabecalhoAdm/>

            <div className='container-page'> 
            
                <div className='mensagem-conclusao'>

                    <div className='titulo-mensagem'>

                        <h1>O produto foi cadastrado com sucesso!</h1>
                        <img src='/assets/images/patinhas.png' alt='icon-patinhas'/>
                    </div>
                    
                    <hr/>

                    <Link to='/adm/cadastrar-produto' className='Link redirecionar-page'>Voltar para página de cadastro

                        <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4375 19.7143H5.0625C4.1291 19.7143 3.375 18.9801 3.375 18.0714L3.375 4.92857C3.375 4.01987 4.1291 3.28571 5.0625 3.28571H8.4375C9.3709 3.28571 10.125 2.55156 10.125 1.64286C10.125 0.734152 9.3709 0 8.4375 0H5.0625C2.26758 0 0 2.20759 0 4.92857L0 18.0714C0 20.7924 2.26758 23 5.0625 23H8.4375C9.3709 23 10.125 22.2658 10.125 21.3571C10.125 20.4484 9.3709 19.7143 8.4375 19.7143ZM8.9332 10.3397C8.27402 10.9815 8.27402 12.0237 8.9332 12.6654L15.6832 19.2368C16.3424 19.8786 17.4129 19.8786 18.0721 19.2368C18.7312 18.5951 18.7312 17.5529 18.0721 16.9112L14.2014 13.1429L25.3125 13.1429C26.2459 13.1429 27 12.4087 27 11.5C27 10.5913 26.2459 9.85714 25.3125 9.85714L14.2014 9.85714L18.0721 6.08884C18.7312 5.4471 18.7312 4.40491 18.0721 3.76317C17.4129 3.12143 16.3424 3.12143 15.6832 3.76317L8.9332 10.3346V10.3397Z" fill="white"/>
                        </svg>
                    </Link>

                    {/* Colocar o caminho quando for feita a págin de consulta */}
                    <Link to='/adm' className='Link redirecionar-page'>Ver produto cadastrado

                        <svg width="22" height="29" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 0C2.01797 0 0 1.90586 0 4.25V29.75C0 32.0941 2.01797 34 4.5 34H22.5C24.982 34 27 32.0941 27 29.75V10.625H18C16.7555 10.625 15.75 9.67539 15.75 8.5V0H4.5ZM18 0V8.5H27L18 0ZM7.875 17H19.125C19.7437 17 20.25 17.4781 20.25 18.0625C20.25 18.6469 19.7437 19.125 19.125 19.125H7.875C7.25625 19.125 6.75 18.6469 6.75 18.0625C6.75 17.4781 7.25625 17 7.875 17ZM7.875 21.25H19.125C19.7437 21.25 20.25 21.7281 20.25 22.3125C20.25 22.8969 19.7437 23.375 19.125 23.375H7.875C7.25625 23.375 6.75 22.8969 6.75 22.3125C6.75 21.7281 7.25625 21.25 7.875 21.25ZM7.875 25.5H19.125C19.7437 25.5 20.25 25.9781 20.25 26.5625C20.25 27.1469 19.7437 27.625 19.125 27.625H7.875C7.25625 27.625 6.75 27.1469 6.75 26.5625C6.75 25.9781 7.25625 25.5 7.875 25.5Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}