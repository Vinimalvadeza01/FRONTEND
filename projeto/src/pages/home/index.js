import './index.scss';
import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Enfeite from '../../components/quadrado-enfeite';
import SectionDecoration from '../../components/section-decoration';
import Rodape from '../../components/rodape';
import QuadradoEnfeite from '../../components/quadrado-enfeite';
import CardProduto from '../../components/card-produto';

import axios from 'axios';

export default function HomePage(){

    const[produtosMaisVendidos,setProdutosMaisVendidos]=useState([]);
    const[produtosMelhorAvaliados,setProdutosMelhorAvaliados]=useState([]);
    const[caesMaisGostam,setCaesMaisGostam]=useState([]);
    const[gatosMaisGostam,setGatosMaisGostam]=useState([]);

    const carrossel1=useRef(null);
    const carrossel2=useRef(null);
    const carrossel3=useRef(null);
    const carrossel4=useRef(null);

    async function consultarMaisVendidos(){

        try{     
        
            const url='http://localhost:5000/produto/consulta/maisVendidos';

            const resp=await axios.get(url);

            setProdutosMaisVendidos(resp.data);
       }
       catch(err){}
    }

    async function consultarMelhorAvaliados(){

        try{

            const url='http://localhost:5000/produto/consulta/melhorAval';

            const resp=await axios.get(url);

            setProdutosMelhorAvaliados(resp.data);
        }

        catch(err){}
    }
    
    async function consultarCaesMaisGostam(){

        try{

            const url='http://localhost:5000/produto/consulta/MVCachorro';

            const resp=await axios.get(url);

            setCaesMaisGostam(resp.data);
        }

        catch(err){}
    }

    async function consultarGatosMaisGostam(){

        try{

            const url='http://localhost:5000/produto/consulta/MVGato';

            const resp=await axios.get(url);

            setGatosMaisGostam(resp.data);
        }

        catch(err){}
    }

    function acaoBotoes(e,botao,nrCarrossel){

        // Verificar primeiro qual carrossel se trata
        if(nrCarrossel===1){

            // Verificar qual botão foi clicado
            if(botao==='direito'){

                carrossel1.current.scrollLeft += carrossel1.current.offsetWidth;
            }

            if(botao==='esquerdo'){

                carrossel1.current.scrollLeft-=carrossel1.current.offsetWidth;
            }
        }

        if(nrCarrossel===2){

            // Verificar qual botão foi clicado
            if(botao==='direito'){

                carrossel2.current.scrollLeft += carrossel2.current.offsetWidth;
            }
            
            if(botao==='esquerdo'){
            
                carrossel2.current.scrollLeft-=carrossel2.current.offsetWidth;
            }
        }

        if(nrCarrossel===3){

            // Verificar qual botão foi clicado
            if(botao==='direito'){

                carrossel3.current.scrollLeft += carrossel3.current.offsetWidth;
            }
            
            if(botao==='esquerdo'){
            
                carrossel3.current.scrollLeft-=carrossel3.current.offsetWidth;
            }
        }

        if(nrCarrossel===4){

            // Verificar qual botão foi clicado
            if(botao==='direito'){

                carrossel4.current.scrollLeft += carrossel4.current.offsetWidth;
            }
            
            if(botao==='esquerdo'){
            
                carrossel4.current.scrollLeft-=carrossel4.current.offsetWidth;
            }
        }
    }
    
    useEffect(() => {

        consultarMaisVendidos();
        consultarMelhorAvaliados();
        consultarCaesMaisGostam();
        consultarGatosMaisGostam();
    }, []);

    return(

        <div className='page-home'>

            <Cabecalho/>

            <SectionDecoration/>

            <section className='section-mensagem'>

                <div className='mensagem'>

                    <h3>VegPet</h3>
                    <p>Ao adicionarmos um cardápio vegano para nosso animais, é uma forma de além de nos preocuparmos com o meio ambiente, nos preocupar com o animal do seu próximo. Com a VegPet, selecionamos os produtos ideias para ver o sorriso de cada animal com seu dono e com nossa grande mãe natureza.</p>
                </div>
    
                <div className='background-image-mensagem'>

                    <img src='/assets/images/cachorro-melancia.jpg' alt='imagem-natureza' />
                </div>
            </section>

            <Enfeite/>

            <section className='section-vantagens'>

                <div className='vantagem1'>

                    <svg width="129" height="63" viewBox="0 0 329 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.575 0C43.9523 0 32.9 11.0439 32.9 24.6562V49.3125H8.225C3.70125 49.3125 0 53.0109 0 57.5312C0 62.0516 3.70125 65.75 8.225 65.75H32.9H139.825C144.349 65.75 148.05 69.4484 148.05 73.9688C148.05 78.4891 144.349 82.1875 139.825 82.1875H32.9H24.675C20.1513 82.1875 16.45 85.8859 16.45 90.4062C16.45 94.9266 20.1513 98.625 24.675 98.625H32.9H123.375C127.899 98.625 131.6 102.323 131.6 106.844C131.6 111.364 127.899 115.062 123.375 115.062H32.9H8.225C3.70125 115.062 0 118.761 0 123.281C0 127.802 3.70125 131.5 8.225 131.5H32.9H106.925C111.449 131.5 115.15 135.198 115.15 139.719C115.15 144.239 111.449 147.938 106.925 147.938H32.9V213.688C32.9 240.912 55.0047 263 82.25 263C109.495 263 131.6 240.912 131.6 213.688H197.4C197.4 240.912 219.505 263 246.75 263C273.995 263 296.1 240.912 296.1 213.688H312.55C321.649 213.688 329 206.342 329 197.25C329 188.158 321.649 180.812 312.55 180.812V147.938V131.5V121.894C312.55 113.162 309.106 104.789 302.937 98.625L263.2 58.9182C257.031 52.7541 248.652 49.3125 239.913 49.3125H213.85V24.6562C213.85 11.0439 202.798 0 189.175 0H57.575ZM279.65 121.894V131.5H213.85V82.1875H239.913L279.65 121.894ZM82.25 189.031C88.7942 189.031 95.0704 191.629 99.6979 196.253C104.325 200.877 106.925 207.148 106.925 213.688C106.925 220.227 104.325 226.498 99.6979 231.122C95.0704 235.746 88.7942 238.344 82.25 238.344C75.7058 238.344 69.4296 235.746 64.8021 231.122C60.1747 226.498 57.575 220.227 57.575 213.688C57.575 207.148 60.1747 200.877 64.8021 196.253C69.4296 191.629 75.7058 189.031 82.25 189.031ZM222.075 213.688C222.075 207.148 224.675 200.877 229.302 196.253C233.93 191.629 240.206 189.031 246.75 189.031C253.294 189.031 259.57 191.629 264.198 196.253C268.825 200.877 271.425 207.148 271.425 213.688C271.425 220.227 268.825 226.498 264.198 231.122C259.57 235.746 253.294 238.344 246.75 238.344C240.206 238.344 233.93 235.746 229.302 231.122C224.675 226.498 222.075 220.227 222.075 213.688Z" fill="#619853"/>
                    </svg>
                    <span>Frete grátis e serviços de entrega para todo o país!</span>
                </div>

                <div className='vantagem2'>

                    <svg width="51" height="89" viewBox="0 0 211 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M211 196.378C180.721 285.209 108.183 231.468 108.183 231.468C85.9266 284.624 49.1629 318.805 6.73903 319C-2.10843 319 -2.3832 303.144 6.73903 303.144C42.1289 302.949 72.9576 275.397 93.1254 231.598C70.5397 241.931 27.951 249.728 4.32109 178.183C64.2201 149.005 91.7516 185.461 102.303 207.75C107.743 191.894 111.645 174.673 114.172 155.958C114.172 155.958 37.4029 170.19 32.0175 92.2104C97.4667 61.0837 115.876 142.052 115.876 142.052C116.755 131.2 117.689 107.871 117.689 107.351C117.689 107.351 59.2743 59.4592 96.7523 0C165.224 27.9426 130.494 105.532 130.494 105.532C130.768 106.572 130.768 120.998 130.494 127.236C130.494 127.236 155.332 69.4015 205.45 89.8711C203.142 176.948 127.471 159.013 127.471 159.013C125.053 176.818 121.316 193.713 116.481 209.374C116.481 209.374 162.092 149.72 211 196.378Z" fill="#619853"/>
                    </svg>
                    <span>Produtos 100% veganos!</span>
                </div>

                <div className='vantagem3'>

                <svg width="54" height="86" viewBox="0 0 224 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72 72V96H152V72C152 49.9 134.1 32 112 32C89.9 32 72 49.9 72 72ZM40 96V72C40 32.25 72.25 0 112 0C151.75 0 184 32.25 184 72V96H192C209.65 96 224 110.35 224 128V224C224 241.65 209.65 256 192 256H32C14.35 256 0 241.65 0 224V128C0 110.35 14.35 96 32 96H40Z" fill="#619853"/>
                </svg>
                <span>Segurança de entrega, atendimento e pagamento a você!</span>

                </div>
            </section>

            <Enfeite/>
            <SectionDecoration/>

            <section className='section-produtos'>

                {/* em 768px exibir 3 produtos, 440 exibir 2 produtos,320px exibir apenas 1 */}

                <div className='mais-vendidos'>

                    <h3>Mais vendidos</h3>

                    {produtosMaisVendidos.length>0 ? 

                        <div className='container-produtos'>

                            <button  onClick={(e) => {acaoBotoes(e,'esquerdo',1);}}> 
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.46439 33.4645C-0.488228 35.4171 -0.488228 38.5829 1.46439 40.5355L33.2842 72.3553C35.2368 74.308 38.4026 74.308 40.3553 72.3553C42.3079 70.4027 42.3079 67.2369 40.3553 65.2843L12.071 37L40.3553 8.71573C42.3079 6.76311 42.3079 3.59728 40.3553 1.64466C38.4026 -0.307961 35.2368 -0.307961 33.2842 1.64466L1.46439 33.4645ZM117.648 32L4.99992 32V42L117.648 42V32Z" fill="#3D5745"/>
                                </svg>
                            </button>

                            <div className='listagem-produtos' ref={carrossel1}>
                                {produtosMaisVendidos.map(item => 
                                    <CardProduto 
                                        id={item.ID}
                                        capa={item.Capa}
                                        nome={item.Nome}
                                        avaliacao={item.Avaliação}
                                        avaliacoes={item.Avaliações}
                                        preco={item.Preço}
                                />)}
                            </div>
                            
                            <button onClick={(e) => {acaoBotoes(e,'direito',1)}}>
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M116.184 40.5355C118.136 38.5829 118.136 35.4171 116.184 33.4645L84.3638 1.64466C82.4111 -0.307961 79.2453 -0.307961 77.2927 1.64466C75.3401 3.59728 75.3401 6.76311 77.2927 8.71573L105.577 37L77.2927 65.2843C75.3401 67.2369 75.3401 70.4027 77.2927 72.3553C79.2453 74.308 82.4111 74.308 84.3638 72.3553L116.184 40.5355ZM0 42L112.648 42V32L0 32L0 42Z" fill="#3D5745"/>
                                </svg>
                            </button>
                        </div>
                    : <div className='erro-listagem'>Ocorreu um erro ao encontrar os produtos mais vendidos</div>}

                </div>

                <div className='melhor-avaliados'>

                    <h3>Melhor avaliados</h3>

                    {produtosMelhorAvaliados.length>0 ? 
                        <div className='container-produtos'>

                            <button  onClick={(e) => {acaoBotoes(e,'esquerdo',2);}}> 
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.46439 33.4645C-0.488228 35.4171 -0.488228 38.5829 1.46439 40.5355L33.2842 72.3553C35.2368 74.308 38.4026 74.308 40.3553 72.3553C42.3079 70.4027 42.3079 67.2369 40.3553 65.2843L12.071 37L40.3553 8.71573C42.3079 6.76311 42.3079 3.59728 40.3553 1.64466C38.4026 -0.307961 35.2368 -0.307961 33.2842 1.64466L1.46439 33.4645ZM117.648 32L4.99992 32V42L117.648 42V32Z" fill="#3D5745"/>
                                </svg>
                            </button>

                            <div className='listagem-produtos' ref={carrossel2}>
                                {produtosMelhorAvaliados.map(item => 
                                    <CardProduto 
                                        id={item.ID}
                                        capa={item.Capa}
                                        nome={item.Nome}
                                        avaliacao={item.Avaliação}
                                        avaliacoes={item.Avaliações}
                                        preco={item.Preço}
                                />)}
                            </div>

                            <button onClick={(e) => {acaoBotoes(e,'direito',2)}}>
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M116.184 40.5355C118.136 38.5829 118.136 35.4171 116.184 33.4645L84.3638 1.64466C82.4111 -0.307961 79.2453 -0.307961 77.2927 1.64466C75.3401 3.59728 75.3401 6.76311 77.2927 8.71573L105.577 37L77.2927 65.2843C75.3401 67.2369 75.3401 70.4027 77.2927 72.3553C79.2453 74.308 82.4111 74.308 84.3638 72.3553L116.184 40.5355ZM0 42L112.648 42V32L0 32L0 42Z" fill="#3D5745"/>
                                </svg>
                            </button>
                        </div>
                    : <div className='erro-listagem'>Ocorreu um erro ao encontrar os produtos mais vendidos</div>}
                </div>

                <div className='caes-mais-gostam'>

                    <h3>O que os cães mais gostam</h3>

                    {caesMaisGostam.length>0 ? 
                        <div className='container-produtos'>

                            <button  onClick={(e) => {acaoBotoes(e,'esquerdo',3);}}> 
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.46439 33.4645C-0.488228 35.4171 -0.488228 38.5829 1.46439 40.5355L33.2842 72.3553C35.2368 74.308 38.4026 74.308 40.3553 72.3553C42.3079 70.4027 42.3079 67.2369 40.3553 65.2843L12.071 37L40.3553 8.71573C42.3079 6.76311 42.3079 3.59728 40.3553 1.64466C38.4026 -0.307961 35.2368 -0.307961 33.2842 1.64466L1.46439 33.4645ZM117.648 32L4.99992 32V42L117.648 42V32Z" fill="#3D5745"/>
                                </svg>
                            </button>

                            <div className='listagem-produtos' ref={carrossel3}>
                                {caesMaisGostam.map(item => 
                                    <CardProduto 
                                        id={item.ID}
                                        capa={item.Capa}
                                        nome={item.Nome}
                                        avaliacao={item.Avaliação}
                                        avaliacoes={item.Avaliações}
                                        preco={item.Preço}
                                />)}
                            </div>

                            <button onClick={(e) => {acaoBotoes(e,'direito',3)}}>
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M116.184 40.5355C118.136 38.5829 118.136 35.4171 116.184 33.4645L84.3638 1.64466C82.4111 -0.307961 79.2453 -0.307961 77.2927 1.64466C75.3401 3.59728 75.3401 6.76311 77.2927 8.71573L105.577 37L77.2927 65.2843C75.3401 67.2369 75.3401 70.4027 77.2927 72.3553C79.2453 74.308 82.4111 74.308 84.3638 72.3553L116.184 40.5355ZM0 42L112.648 42V32L0 32L0 42Z" fill="#3D5745"/>
                                </svg>
                            </button>
                        </div>
                    : <div className='erro-listagem'>Ocorreu um erro ao encontrar os produtos mais vendidos</div>}
                </div>

                <div className='gatos-mais-gostam'>

                    <h3>O que os gatos mais gostam</h3>

                    {gatosMaisGostam.length>0 ? 
                        <div className='container-produtos'>

                            <button  onClick={(e) => {acaoBotoes(e,'esquerdo',4);}}> 
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.46439 33.4645C-0.488228 35.4171 -0.488228 38.5829 1.46439 40.5355L33.2842 72.3553C35.2368 74.308 38.4026 74.308 40.3553 72.3553C42.3079 70.4027 42.3079 67.2369 40.3553 65.2843L12.071 37L40.3553 8.71573C42.3079 6.76311 42.3079 3.59728 40.3553 1.64466C38.4026 -0.307961 35.2368 -0.307961 33.2842 1.64466L1.46439 33.4645ZM117.648 32L4.99992 32V42L117.648 42V32Z" fill="#3D5745"/>
                                </svg>
                            </button>

                            <div className='listagem-produtos' ref={carrossel4}>
                                {gatosMaisGostam.map(item => 
                                    <CardProduto 
                                        id={item.ID}
                                        capa={item.Capa}
                                        nome={item.Nome}
                                        avaliacao={item.Avaliação}
                                        avaliacoes={item.Avaliações}
                                        preco={item.Preço}
                                />)}
                            </div>

                            <button onClick={(e) => {acaoBotoes(e,'direito',4)}}>
                                <svg width="58" height="14" viewBox="0 0 118 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M116.184 40.5355C118.136 38.5829 118.136 35.4171 116.184 33.4645L84.3638 1.64466C82.4111 -0.307961 79.2453 -0.307961 77.2927 1.64466C75.3401 3.59728 75.3401 6.76311 77.2927 8.71573L105.577 37L77.2927 65.2843C75.3401 67.2369 75.3401 70.4027 77.2927 72.3553C79.2453 74.308 82.4111 74.308 84.3638 72.3553L116.184 40.5355ZM0 42L112.648 42V32L0 32L0 42Z" fill="#3D5745"/>
                                </svg>
                            </button>
                        </div>
                    : <div className='erro-listagem'>Ocorreu um erro ao encontrar os produtos mais vendidos</div>}
                </div>

                <div className='ver-tudo'>

                    <h2>Clique para ver mais produtos</h2>
                    <Link className='Link ver-mais-button' to='/produtos'>Ver mais</Link>
                </div>
            </section>

            <QuadradoEnfeite/>
            <Rodape/>
        </div>
    );
}