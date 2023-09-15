import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cabecalho() {

    const [valorPesquisa, setValorPesquisa] = useState('');

    return (

        <header className='cabecalho'>

            <img src='/assets/images/logo.png' alt='logo' id='logo' />

            <div className='container-header'>

                <div className='container-infs'>

                    <div className='pesquisa'>
                     
                        <input type='text' value={valorPesquisa} maxLength='100' placeholder='Pesquise por um produto' onChange={(e) => { setValorPesquisa(e.target.value) }} />
                        <button>
                            <svg  id='icon-lupa' width="25" height="25" viewBox="0 0 30 30" fill="#3D5745" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3762 12.1857C24.3762 14.8748 23.5031 17.3588 22.0323 19.3741L29.4507 26.7969C30.1831 27.5292 30.1831 28.7185 29.4507 29.4508C28.7182 30.1831 27.5287 30.1831 26.7962 29.4508L19.3779 22.028C17.3622 23.5044 14.8777 24.3714 12.1881 24.3714C5.45534 24.3714 0 18.9172 0 12.1857C0 5.45428 5.45534 0 12.1881 0C18.9208 0 24.3762 5.45428 24.3762 12.1857ZM12.1881 20.622C13.2962 20.622 14.3934 20.4038 15.4171 19.9798C16.4409 19.5558 17.3711 18.9344 18.1546 18.1511C18.9381 17.3677 19.5597 16.4377 19.9837 15.4141C20.4078 14.3906 20.626 13.2936 20.626 12.1857C20.626 11.0778 20.4078 9.98083 19.9837 8.9573C19.5597 7.93376 18.9381 7.00375 18.1546 6.22038C17.3711 5.437 16.4409 4.81559 15.4171 4.39162C14.3934 3.96766 13.2962 3.74945 12.1881 3.74945C11.08 3.74945 9.98278 3.96766 8.95905 4.39162C7.93531 4.81559 7.00512 5.437 6.22159 6.22038C5.43806 7.00375 4.81653 7.93376 4.39248 8.9573C3.96844 9.98083 3.75018 11.0778 3.75018 12.1857C3.75018 13.2936 3.96844 14.3906 4.39248 15.4141C4.81653 16.4377 5.43806 17.3677 6.22159 18.1511C7.00512 18.9344 7.93531 19.5558 8.95905 19.9798C9.98278 20.4038 11.08 20.622 12.1881 20.622Z" fill="3D5745" />
                            </svg>
                        </button>
                        
                    </div>

                    <div className='direcionar'>

                        <div className='criar-conta'>
                            <Link className='Link Link-cabecalho' name='Link-user' to='/cadastro'>
                                
                                <svg id='user-icon' width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 16.5C15.546 16.5 17.5081 15.6308 18.9548 14.0836C20.4015 12.5365 21.2143 10.438 21.2143 8.25C21.2143 6.06196 20.4015 3.96354 18.9548 2.41637C17.5081 0.869194 15.546 0 13.5 0C11.454 0 9.49189 0.869194 8.04518 2.41637C6.59847 3.96354 5.78571 6.06196 5.78571 8.25C5.78571 10.438 6.59847 12.5365 8.04518 14.0836C9.49189 15.6308 11.454 16.5 13.5 16.5ZM10.7458 19.5938C4.80938 19.5938 0 24.7371 0 31.0857C0 32.1428 0.801563 33 1.78996 33H25.21C26.1984 33 27 32.1428 27 31.0857C27 24.7371 22.1906 19.5938 16.2542 19.5938H10.7458Z" fill="#619853" />
                                </svg>

                                <label for='Link-user'>Não possui uma conta? Faça Login</label>
                            </Link>
                            
                        </div>
                        
                        <div className='carrinho'>

                            <Link className='Link Link-cabecalho' to='/carrinho'>
                                <svg id='carrinho-icon' width="37" height="34" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.718186 0.08778C-0.106342 0.431717 -0.258229 1.5925 0.457809 2.18364L0.79413 2.46309H3.14838H5.50262L8.67055 15.6509C11.1007 25.7433 11.8059 28.8602 11.7083 28.9247C11.6323 28.9677 11.4696 29.0107 11.3503 29.0107C11.2309 29.0107 10.7753 29.1826 10.3305 29.3868C7.26017 30.8486 6.62007 34.9221 9.12621 37.2114C9.93989 37.953 10.7319 38.3399 11.8493 38.5011L12.7172 38.6194L12.3375 38.8128C11.6974 39.1353 10.5908 40.2423 10.2437 40.9087C9.26725 42.7359 9.32149 44.8317 10.4064 46.4869C12.3158 49.4104 16.471 49.851 18.8904 47.4005C21.3422 44.9069 20.93 40.9409 18.0116 39.017L17.3498 38.5764H29.2621H41.1852L40.5125 39.017C39.3083 39.7909 38.4838 40.9624 38.1474 42.3597C37.2361 46.1752 40.7295 49.6898 44.6243 48.8837C46.0673 48.5828 47.6838 47.3897 48.313 46.1537C49.1592 44.4985 49.1592 42.6499 48.3239 41.0054C47.9658 40.3176 46.9786 39.2857 46.2842 38.8881L45.7418 38.5764H46.664C47.8031 38.5764 48.2588 38.3829 48.5517 37.781C48.7361 37.3941 48.747 37.3189 48.6059 36.9319C48.5191 36.6955 48.313 36.3945 48.1503 36.2763L47.8465 36.0506L29.7069 35.9969L11.5672 35.9431L11.2201 35.6959C10.3955 35.1155 10.0484 34.4062 10.1243 33.4603C10.1894 32.7295 10.6234 32.0738 11.296 31.6977L11.7842 31.429L28.0036 31.3752L44.2229 31.3215L44.9498 30.9775C45.3512 30.7948 45.8937 30.4401 46.154 30.2037C47.1088 29.3331 47.1196 29.3009 49.604 19.2192C50.8625 14.1139 51.8824 9.75024 51.8824 9.53528C51.8824 9.06237 51.6437 8.67544 51.264 8.50347C51.0795 8.40674 49.7451 8.37449 46.8158 8.37449C42.8885 8.37449 42.639 8.38524 42.6932 8.55721C43.0621 9.79323 43.1055 12.5125 42.78 14.0172C41.7493 18.8001 38.2125 22.4651 33.4389 23.7119C32.0286 24.0773 29.5984 24.1741 28.1663 23.9161C21.2229 22.6478 16.6229 16.285 17.7512 9.50303C17.838 8.96563 17.9139 8.50347 17.9139 8.46048C17.9139 8.41748 16.0262 8.36374 13.7154 8.353L9.50592 8.32075L8.60545 4.55895C8.0847 2.3986 7.61819 0.678921 7.5097 0.52845C7.14083 0.0125427 6.98894 -0.00895309 3.86441 0.00179672C2.25875 0.00179672 0.837526 0.0447884 0.718186 0.08778ZM15.9177 40.7797C17.2955 41.1881 18.2069 42.6929 17.9139 44.1008C17.4474 46.3364 14.8003 47.25 13.097 45.7668C12.3375 45.1004 12.1097 44.606 12.1097 43.5742C12.1097 42.5854 12.305 42.1125 12.9993 41.4461C13.7805 40.7045 14.8328 40.4573 15.9177 40.7797ZM44.5158 40.8335C45.1776 41.0699 45.8177 41.6396 46.154 42.2737C46.4904 42.8971 46.4904 44.2513 46.154 44.8747C45.8069 45.5303 45.004 46.1752 44.2989 46.3794C43.1055 46.7234 41.7493 46.2397 41.055 45.2079C39.4493 42.8326 41.8253 39.8339 44.5158 40.8335Z" fill="#619853"/>
                                    <path d="M28.4054 0.978014C26.431 1.40247 24.8255 2.25138 23.3718 3.63358C22.0484 4.90694 21.072 6.57211 20.573 8.37876C20.2367 9.64124 20.2367 12.2315 20.573 13.494C21.5602 17.0964 24.2722 19.7955 27.9172 20.7968C29.0779 21.1124 31.8334 21.0906 33.005 20.7533C37.1381 19.5561 39.9694 16.2149 40.4359 11.9921C40.9783 7.11628 37.8758 2.53435 33.07 1.14127C32.0178 0.836529 29.4793 0.738579 28.4054 0.978014ZM30.9438 5.00489C31.5947 5.30963 31.6598 5.58172 31.6598 7.71487V9.63036H33.5148C35.5651 9.63036 35.9122 9.71743 36.2485 10.2725C36.6065 10.882 36.433 11.6329 35.8255 12.0356C35.5434 12.2206 35.3048 12.2424 33.5908 12.2424H31.6598V14.147C31.6598 16.3019 31.5947 16.5522 30.9655 16.857C30.4773 17.0855 30.1627 17.0746 29.7288 16.8134C29.143 16.4543 29.0562 16.0734 29.0562 14.0382V12.2424H27.1687C25.3896 12.2424 25.2703 12.2315 24.9231 11.9921C24.4024 11.6438 24.1963 11.0234 24.4241 10.4793C24.7387 9.72831 25.0533 9.63036 27.1904 9.63036H29.0562V7.83459C29.0562 5.79939 29.143 5.41846 29.7288 5.05931C30.1519 4.79811 30.4773 4.78722 30.9438 5.00489Z" fill="#619853"/>
                                </svg>

                                <label for='Link-user'>Ver meu carrinho</label>
                            </Link>

                            
                        </div>
                    </div>
                </div>

                <nav className='header-menu'>

                    <button className='Link-menu'>
                        
                        <span>Cachorro</span>
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5874 12.3655C9.36832 13.2115 10.6365 13.2115 11.4175 12.3655L19.4141 3.7022C19.9889 3.07953 20.1576 2.15228 19.8452 1.3401C19.5328 0.527919 18.8081 0 17.996 0L2.00264 0.0067686C1.19673 0.0067686 0.465785 0.534688 0.153415 1.34687C-0.158954 2.15905 0.0159727 3.08629 0.584486 3.70897L8.58115 12.3723L8.5874 12.3655Z" fill="white"/>
                        </svg>
                    </button>
                    
                    <button className='Link-menu'>
                        <span>Gato</span>
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5874 12.3655C9.36832 13.2115 10.6365 13.2115 11.4175 12.3655L19.4141 3.7022C19.9889 3.07953 20.1576 2.15228 19.8452 1.3401C19.5328 0.527919 18.8081 0 17.996 0L2.00264 0.0067686C1.19673 0.0067686 0.465785 0.534688 0.153415 1.34687C-0.158954 2.15905 0.0159727 3.08629 0.584486 3.70897L8.58115 12.3723L8.5874 12.3655Z" fill="white"/>
                        </svg>
                    </button>

                    <button className='Link-menu'>

                        <span>Peixes</span>
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5874 12.3655C9.36832 13.2115 10.6365 13.2115 11.4175 12.3655L19.4141 3.7022C19.9889 3.07953 20.1576 2.15228 19.8452 1.3401C19.5328 0.527919 18.8081 0 17.996 0L2.00264 0.0067686C1.19673 0.0067686 0.465785 0.534688 0.153415 1.34687C-0.158954 2.15905 0.0159727 3.08629 0.584486 3.70897L8.58115 12.3723L8.5874 12.3655Z" fill="white"/>
                        </svg>
                    </button>

                    <button className='Link-menu'>

                        <span>Pássaros</span>
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5874 12.3655C9.36832 13.2115 10.6365 13.2115 11.4175 12.3655L19.4141 3.7022C19.9889 3.07953 20.1576 2.15228 19.8452 1.3401C19.5328 0.527919 18.8081 0 17.996 0L2.00264 0.0067686C1.19673 0.0067686 0.465785 0.534688 0.153415 1.34687C-0.158954 2.15905 0.0159727 3.08629 0.584486 3.70897L8.58115 12.3723L8.5874 12.3655Z" fill="white"/>
                        </svg>
                    </button>

                    <button className='Link-menu'>

                        <span>Outros Animais</span>
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5874 12.3655C9.36832 13.2115 10.6365 13.2115 11.4175 12.3655L19.4141 3.7022C19.9889 3.07953 20.1576 2.15228 19.8452 1.3401C19.5328 0.527919 18.8081 0 17.996 0L2.00264 0.0067686C1.19673 0.0067686 0.465785 0.534688 0.153415 1.34687C-0.158954 2.15905 0.0159727 3.08629 0.584486 3.70897L8.58115 12.3723L8.5874 12.3655Z" fill="white"/>
                        </svg>
                    </button>

                </nav>
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