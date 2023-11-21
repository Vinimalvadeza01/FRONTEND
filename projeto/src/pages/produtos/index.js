import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import SectionDecoration from '../../components/section-decoration';
import QuadradoEnfeite from '../../components/quadrado-enfeite';
import CardProduto from '../../components/card-produto';

import { useState,useEffect} from 'react';
import axios from 'axios';

export default function PageProdutos(){

    const[valorPesquisa,setValorPesquisa]=useState('');
    const[porCategoria,setPorCategoria]=useState(false);
    const[categoria,setCategoria]=useState(Number());
    const[porAnimal,setPorAnimal]=useState(false);
    const[animal,setAnimal]=useState(Number());
    const[maisVendidos,setMaisVendidos]=useState(false);
    const[melhorAvaliados,setMelhorAvaliados]=useState(false);

    const[produtos,setProdutos]=useState([]);
    const[categorias,setCategorias]=useState([]);
    const[animais,setAnimais]=useState([]);

    const[mostrarFiltros,setMostrarFiltros]=useState('none');

    async function listarProdutos(){

        try{

            const url=`http://localhost:5000/produto/consulta`;

            const filtros={

                produto:valorPesquisa,
                categoria:porCategoria,
                idCategoria:categoria,
                animal:porAnimal,
                idAnimal:animal,
                maisVendidos:maisVendidos,
                melhorAvaliados:melhorAvaliados
            };

            const resp=await axios.post(url,filtros);
    
            setProdutos(resp.data);
        }

        catch(err){

            alert('Ocorreu um erro no sistema e não foi consultar os produtos');
        }
    }

    async function listarCategorias(){

        try{
            const url=`http://localhost:5000/categoria/listar`;

            const resp=await axios.get(url);

            setCategorias(resp.data);
        }

        catch(err){

            alert('Ocorreu um erro ao listar as categorias, este filtro não irá funcionar');
        }
    }

    async function listarAnimais(){

        try{
            const url=`http://localhost:5000/animal/listar`;

            const resp=await axios.get(url);

            setAnimais(resp.data);
        }

        catch(err){

            alert('Ocorreu um erro ao listar os animais, este filtro não irá funcionar');
        }
    }
    
    useEffect(() => {

        listarProdutos();
        listarCategorias();
        listarAnimais();
    },[valorPesquisa,maisVendidos,melhorAvaliados,categoria,animal]);

    return(

        <div className='page-produtos'>

            <Cabecalho/>

            <section className='section-pesquisa'>
                <SectionDecoration/>

                <div className='container-search'>

                    <h4>{valorPesquisa!=='' ? `Exibindo ${produtos.length} resultados para: "${valorPesquisa}"` : 'Exibindo resultados'}</h4>

                    <div className='sub-container-input'>

                        <input type='text' maxLength='99' value={valorPesquisa} onChange={(e) => {setValorPesquisa(e.target.value)}}/>
                        <span>Procurando por algo ? Pesquise aqui</span>
                    </div>
                </div>
            </section>

            <QuadradoEnfeite/>

            <section className='section-produtos'>

                <div className='container-filtros-responsivo'>
                    <button onClick={() => {setMostrarFiltros('block')}}>
                        <svg width="35" height="25" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.5C0 1.11719 1.27679 0 2.85714 0H37.1429C38.7232 0 40 1.11719 40 2.5C40 3.88281 38.7232 5 37.1429 5H2.85714C1.27679 5 0 3.88281 0 2.5ZM0 15C0 13.6172 1.27679 12.5 2.85714 12.5H37.1429C38.7232 12.5 40 13.6172 40 15C40 16.3828 38.7232 17.5 37.1429 17.5H2.85714C1.27679 17.5 0 16.3828 0 15ZM40 27.5C40 28.8828 38.7232 30 37.1429 30H2.85714C1.27679 30 0 28.8828 0 27.5C0 26.1172 1.27679 25 2.85714 25H37.1429C38.7232 25 40 26.1172 40 27.5Z" fill="#3D5745"/>
                        </svg>
                    </button>
                    <h3>Filtros</h3>
                </div>

                <div className='filtros'>
                    
                    <form className='filtros-gerais'>
                        <h3>Filtros Gerais</h3>

                        <div className='container-input'>
                            <input id='mais-vendidos' type='checkbox' checked={maisVendidos ? 'checked' : ''} onChange={(e) => {
                                    setMaisVendidos(e.target.checked);}} />
                            <label for='mais-vendidos'>Mais Vendidos</label>
                        </div>

                        <div className='container-input'>
                            <input id='melhor-avaliados' type='checkbox' checked={melhorAvaliados ? 'checked' : ''} onChange={(e) => {
                                    setMelhorAvaliados(e.target.checked);}} />
                            <label for='melhor-avaliados'>Melhor Avaliados</label>
                        </div>
                    </form>

                    <form className='filtros-categoria'>

                        <h3>Filtrar por categoria</h3>

                        <div id='input-todas-categorias' className='container-input'>
                                <input type='checkbox' checked={categoria===0 ? 'checked' : ''} onChange={(e) => {
                                    setPorCategoria(false);
                                    setCategoria(0);}}/>
                                <label for='input-todos=animais'>Todos</label>
                        </div>

                        {categorias.map(item => 
                            <div className='container-input'>
                                <input id={item.Categoria} type='checkbox' checked={categoria===item.ID ? 'checked' : ''} onChange={(e) => {
                                    setPorCategoria(e.target.checked);
                                    setCategoria(item.ID);}} />
                                <label for={item.Categoria}>{item.Categoria}</label>
                            </div>)}
                    </form>

                    <form className='filtros-animal'>

                        <h3>Filtrar por Animal</h3>

                        <div id='input-todos-animais' className='container-input'>
                                <input type='checkbox' checked={animal===0 ? 'checked' : ''} onChange={(e) => {
                                    setPorAnimal(false);
                                    setAnimal(0);}}/>
                                <label for='input-todos=animais'>Todos</label>
                        </div>

                        {animais.map(item => 
                            <div id={item.Animal} className='container-input'>
                                <input type='checkbox' checked={animal===item.ID ? 'checked' : ''} onChange={(e) => {
                                    setPorAnimal(e.target.checked);
                                    setAnimal(item.ID);}}/>
                                <label for={item.Animal}>{item.Animal}</label>
                            </div>)}
                    </form>
                </div>

                <div className='filtros-disp-moveis' style={{display:`${mostrarFiltros}`}}>

                    <button className='botao-fechar-menu' onClick={() => {setMostrarFiltros('none')}}>
                        <svg width="18" height="36" viewBox="0 0 88 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M86.3001 13.5974C88.8895 10.0762 88.477 4.84631 85.3606 1.92065C82.2443 -1.005 77.6156 -0.53897 75.0262 2.98217L44 45.0546L12.9738 2.98217C10.3845 -0.53897 5.75573 -1.005 2.63936 1.92065C-0.477012 4.84631 -0.889473 10.0762 1.69986 13.5974L34.4447 58L1.69986 102.403C-0.889473 105.924 -0.477012 111.154 2.63936 114.079C5.75573 117.005 10.3845 116.539 12.9738 113.018L44 70.9454L75.0262 113.018C77.6156 116.539 82.2443 117.005 85.3606 114.079C88.477 111.154 88.8895 105.924 86.3001 102.403L53.5553 58L86.3001 13.5974Z" fill="#183D0A"/>
                        </svg>
                    </button>

                    <form className='filtros-gerais'>
                        <h3>Filtros Gerais</h3>

                        <div className='container-input'>
                            <input id='mais-vendidos' type='checkbox' checked={maisVendidos ? 'checked' : ''} onChange={(e) => {
                                    setMaisVendidos(e.target.checked);}} />
                            <label for='mais-vendidos'>Mais Vendidos</label>
                        </div>

                        <div className='container-input'>
                            <input id='melhor-avaliados' type='checkbox' checked={melhorAvaliados ? 'checked' : ''} onChange={(e) => {
                                    setMelhorAvaliados(e.target.checked);}} />
                            <label for='melhor-avaliados'>Melhor Avaliados</label>
                        </div>
                    </form>

                    <form className='filtros-categoria'>

                        <h3>Filtrar por categoria</h3>

                        <div id='input-todas-categorias' className='container-input'>
                                <input type='checkbox' checked={categoria===0 ? 'checked' : ''} onChange={(e) => {
                                    setPorCategoria(false);
                                    setCategoria(0);}}/>
                                <label for='input-todos=animais'>Todos</label>
                        </div>

                        {categorias.map(item => 
                            <div className='container-input'>
                                <input id={item.Categoria} type='checkbox' checked={categoria===item.ID ? 'checked' : ''} onChange={(e) => {
                                    setPorCategoria(e.target.checked);
                                    setCategoria(item.ID);}} />
                                <label for={item.Categoria}>{item.Categoria}</label>
                            </div>)}
                    </form>

                    <form className='filtros-animal'>

                        <h3>Filtrar por Animal</h3>

                        <div id='input-todos-animais' className='container-input'>
                                <input type='checkbox' checked={animal===0 ? 'checked' : ''} onChange={(e) => {
                                    setPorAnimal(false);
                                    setAnimal(0);}}/>
                                <label for='input-todos=animais'>Todos</label>
                        </div>

                        {animais.map(item => 
                            <div id={item.Animal} className='container-input'>
                                <input type='checkbox' checked={animal===item.ID ? 'checked' : ''} onChange={(e) => {
                                    setPorAnimal(e.target.checked);
                                    setAnimal(item.ID);}}/>
                                <label for={item.Animal}>{item.Animal}</label>
                            </div>)}
                    </form>
                </div>

                <div className='listagem-produtos'>

                    {produtos.map(item => 
                        <CardProduto
                            id={item.ID}
                            capa={item.Capa}
                            nome={item.Nome}
                            avaliacao={item.Avaliação}
                            avaliacoes={item.Avaliações}
                            preco={item.Preço}/>
                    )}
                </div>
            </section>

            <Rodape/>
        </div>
    );
}