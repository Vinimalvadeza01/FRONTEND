import './index.scss';
import {Link} from 'react-router-dom';

export default function CabecalhoAdm(){

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

                <button className='menu-adm'>

                    <h4>Menu</h4>
                    <svg width="35" height="25" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.5C0 1.11719 1.27679 0 2.85714 0H37.1429C38.7232 0 40 1.11719 40 2.5C40 3.88281 38.7232 5 37.1429 5H2.85714C1.27679 5 0 3.88281 0 2.5ZM0 15C0 13.6172 1.27679 12.5 2.85714 12.5H37.1429C38.7232 12.5 40 13.6172 40 15C40 16.3828 38.7232 17.5 37.1429 17.5H2.85714C1.27679 17.5 0 16.3828 0 15ZM40 27.5C40 28.8828 38.7232 30 37.1429 30H2.85714C1.27679 30 0 28.8828 0 27.5C0 26.1172 1.27679 25 2.85714 25H37.1429C38.7232 25 40 26.1172 40 27.5Z" fill="#619853"/>
                    </svg>
                </button>
            </div>
        </header>
    );
}