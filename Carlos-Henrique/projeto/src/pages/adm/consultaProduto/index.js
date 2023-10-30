import './index.scss';
import InputMask from 'react-input-mask';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import CardProduto from '../../../components/card-produto-adm';
import SelectionConsulta from '../../../components/selectionConsulta';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PageConsultaProdutosAdm(){

    // Variáveis para definir os valores para API e alterar o estado dos inputs de check para checked

    const[produto,setProduto]=useState('');

    const[maisVendidos,setMaisVendidos]=useState(false);
    const[melhorAvaliados,setMelhorAvaliados]=useState(false);
    const[maisFavoritados,setMaisFavoritados]=useState(false);

    const[maisRecentes,setMaisRecentes]=useState(false);
    const[naoLancados,setNaoLancados]=useState(false);
    const[semLancamento,setSemLancamento]=useState(false);

    const[semEstoque,setSemEstoque]=useState(false);
    const[menorEstoque,setMenorEstoque]=useState(false);

    const[porCategoria,setPorCategoria]=useState(false);
    const[porAnimal,setPorAnimal]=useState(false);
    const[porAdm,setPorAdm]=useState(false);

    const[categoria,setCategoria]=useState('');
    const[animal,setAnimal]=useState('');
    const[administrador,setAdministrador]=useState('');

    const[dataEspecifica,setDataEspecifica]=useState('');

    // Variável para guardar o valor dos produtos
    const[produtos,setProdutos]=useState([]);

    const[categorias,setCategorias]=useState([]);
    const[animais,setAnimais]=useState([]);
    const[administradores,setAdministradores]=useState([]);

    // Para evitar que certos inputs sejam marcados ao mesmo tempo, além de alterar valor de selects
    function alterarEstadoInputs(input,e){


        // Para quando clicar no input de "Sem filtro" desmarcar todos os outros
        if(input===0){

            setMaisVendidos(false);
            setMelhorAvaliados(false);
            setMaisFavoritados(false);
            setSemEstoque(false);
            setMenorEstoque(false);
            setMaisRecentes(false);
            setNaoLancados(false);
            setSemLancamento(false);
            setDataEspecifica('');
        }

        // Evitar conflitos nos filtros de data
            if(input===4){

                setNaoLancados(false);
                setSemLancamento(false);
        
                 setDataEspecifica('');
            }
        
            else if(input===5||input===6){
        
                setMaisRecentes(false);
        
                setDataEspecifica('');
            }

        // Para não haver conflito nos filtros de estoque
        if(input===7){

            setMenorEstoque(false);
        }

        else if(input===8){

            setSemEstoque(false);
        }

        if(input===9){

            if(e.target.value===''){

                setPorCategoria(false);
            }

            else{

                setPorCategoria(true);
            }
        }

        if(input===10){

            if(e.target.value===''){

                setPorAnimal(false);
            }

            else{

                setPorAnimal(true);
            }
        }

        if(input===12){

            if(e.target.value===''){

                setPorAdm(false);
            }

            else{

                setPorAdm(true);
            }
        }
    }

    async function listarProdutos(){
         
        try{

            const url='http://localhost:5000/produto/consulta/adm';

            let produtoEspecifico=true;
            let lancamentoEspecifico=false;
            const formatarData=dataEspecifica.split('/');
            let dataFormatada='';

            const ano=formatarData[2];
            const mes=formatarData[1];
            const dia=formatarData[0];

            if(produto.length<1){

                produtoEspecifico=false;
            }

            if(dataEspecifica!==''){

                // Verifica se a data digitada é válida, se não for lança um erro
                if(ano==='    '||mes==='  '||dia==='  '){

                    throw new Error('Data inválida');
                }

                // Se for válida, formata ela aqui
                else{

                    lancamentoEspecifico=true;
                    dataFormatada=`${ano}-${mes}-${dia}`;
                }
            }

            else{

                lancamentoEspecifico=false;
            }

            let filtros = {

                produtoEspecifico:produtoEspecifico,
                produto:produto,

                maisVendidos:maisVendidos,
                melhorAvaliados:melhorAvaliados,
                maisFavoritados:maisFavoritados,
                
                maisRecentes:maisRecentes,
                naoLancados:naoLancados,
                semLancamento:semLancamento,

                semEstoque:semEstoque,
                menorEstoque:menorEstoque,
                
                porCategoria:porCategoria,
                categoria:categoria,
                porAnimal:porAnimal,
                animal:animal,
                porAdministrador:porAdm,
                adm:administrador,

                lancamentoEspecifico: lancamentoEspecifico,
                dataEspecifica:dataFormatada
        };
        
            const resp=await axios.post(url,filtros);

            setProdutos(resp.data);
        }

        catch(err){

            if(err.message){

                alert(err.message);
            }

            else{
                alert(err.response.data.erro);
            }
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

    async function listarAdministradores(){

        try{
            const url=`http://localhost:5000/adm/listar`;

            const resp=await axios.get(url);
            
            setAdministradores(resp.data);
        }

        catch(err){

            alert('Ocorreu um erro ao listar os administradores, este filtro não irá funcionar');
        }
    }

    // Chamada da API ao carregar a página
    useEffect(() => {

         listarProdutos();
         listarCategorias();
         listarAnimais();
         listarAdministradores();

    }, [produto,maisVendidos,melhorAvaliados,maisFavoritados,maisRecentes,naoLancados,semLancamento,semEstoque,menorEstoque,porCategoria,categoria,porAnimal,animal,porAdm,administrador]);

    return(

        <div className='page-consulta-produto'>

            <CabecalhoAdm/>

            <SelectionConsulta tipoConsulta='Produtos' consulta1='clientes' consulta2='pedidos'/>

            <section className='container-page'>

                <div className='container-pesquisa'> 

                    <label for='produto-especifico'>Procurar por produto específico:</label>
                    <p id='especificador-input'>(Nome ou ID)</p>

                    <div className='container-search'>

                        <input type='text' value={produto} onChange={(e) =>{setProduto(e.target.value)}}/>
                        <svg  id='icon-lupa' width="20" height="20" viewBox="0 0 30 30" fill="#3D5745" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3762 12.1857C24.3762 14.8748 23.5031 17.3588 22.0323 19.3741L29.4507 26.7969C30.1831 27.5292 30.1831 28.7185 29.4507 29.4508C28.7182 30.1831 27.5287 30.1831 26.7962 29.4508L19.3779 22.028C17.3622 23.5044 14.8777 24.3714 12.1881 24.3714C5.45534 24.3714 0 18.9172 0 12.1857C0 5.45428 5.45534 0 12.1881 0C18.9208 0 24.3762 5.45428 24.3762 12.1857ZM12.1881 20.622C13.2962 20.622 14.3934 20.4038 15.4171 19.9798C16.4409 19.5558 17.3711 18.9344 18.1546 18.1511C18.9381 17.3677 19.5597 16.4377 19.9837 15.4141C20.4078 14.3906 20.626 13.2936 20.626 12.1857C20.626 11.0778 20.4078 9.98083 19.9837 8.9573C19.5597 7.93376 18.9381 7.00375 18.1546 6.22038C17.3711 5.437 16.4409 4.81559 15.4171 4.39162C14.3934 3.96766 13.2962 3.74945 12.1881 3.74945C11.08 3.74945 9.98278 3.96766 8.95905 4.39162C7.93531 4.81559 7.00512 5.437 6.22159 6.22038C5.43806 7.00375 4.81653 7.93376 4.39248 8.9573C3.96844 9.98083 3.75018 11.0778 3.75018 12.1857C3.75018 13.2936 3.96844 14.3906 4.39248 15.4141C4.81653 16.4377 5.43806 17.3677 6.22159 18.1511C7.00512 18.9344 7.93531 19.5558 8.95905 19.9798C9.98278 20.4038 11.08 20.622 12.1881 20.622Z" fill="3D5745" />
                        </svg>
                    </div>
                </div>

                <form className='filtros'>

                    <h3>Filtros</h3>

                    <div className='container-filtro'>

                        <div className='filtros-gerais'>

                            <h4>Filtros Gerais</h4>

                            <div>
                                <input type='button' id='limpar-filtros' value='Limpar Filtros' onClick={(e) => {
                                    alterarEstadoInputs(0)}}/>
                            </div>

                            <div>
                                <input type='checkbox' id='mais-vendidos' checked={maisVendidos ? 'checked' : ''} onChange={(e) => {
                                    setMaisVendidos(e.target.checked); 
                                    alterarEstadoInputs(1)}}/>
                                <label for='mais-vendidos'>Mais vendidos</label>
                            </div>

                            <div>
                                <input type='checkbox' id='melhor-avaliados' checked={melhorAvaliados ? 'checked' : ''} onChange={(e) => {
                                    setMelhorAvaliados(e.target.checked); 
                                    alterarEstadoInputs(2)}}/>
                                <label for='melhor-avaliados'>Melhor avaliados</label>
                            </div>

                            <div>
                                <input type='checkbox' id='mais-favoritados' checked={maisFavoritados ? 'checked' : ''} onChange={(e) => {
                                    setMaisFavoritados(e.target.checked); 
                                    alterarEstadoInputs(3)}}/>
                                <label for='mais-favoritados'>Mais favoritados</label>
                            </div>
                        </div>

                        <div className='filtros-data'>

                            <h4>Filtros por data</h4>

                            <div>
                                <input type='checkbox' id='recentes' checked={maisRecentes ? 'checked' : ''} onChange={(e) => {
                                    setMaisRecentes(e.target.checked); 
                                    alterarEstadoInputs(4)}}/>
                                <label for='recentes'>Cadastrados recentemente</label>
                            </div>

                            <div>
                                <input type='checkbox' id='nao-lancados' checked={naoLancados ? 'checked' : ''} onChange={(e) => {
                                    setNaoLancados(e.target.checked); 
                                    alterarEstadoInputs(5)}}/>
                                <label for='nao-lancados'>Não lançados</label>
                            </div>

                            <div>
                                <input type='checkbox' id='sem-data-lancamento' checked={semLancamento ? 'checked' : ''} onChange={(e) => {
                                    setSemLancamento(e.target.checked); 
                                    alterarEstadoInputs(6)}}/>
                                <label for='sem-data-lancamento'>Sem data de lançamento</label>
                            </div>
                        </div>

                        <div className='outros-filtros'>

                            <h4>Outros Filtros</h4>

                            <div>
                                <input type='checkbox' id='sem-estoque' checked={semEstoque ? 'checked' : ''} onChange={(e) => {
                                    setSemEstoque(e.target.checked); 
                                    alterarEstadoInputs(7)}}/>
                                <label for='sem-estoque'>Fora de estoque</label>
                            </div>

                            <div>
                                <input type='checkbox' id='menor-quantidade' checked={menorEstoque ? 'checked' : ''} onChange={(e) => {
                                    setMenorEstoque(e.target.checked); 
                                    alterarEstadoInputs(8)}}/>
                                <label for='menor-quantidade'>Menor quantidade em estoque</label>
                            </div>

                            <label>Filtrar por categoria:</label>

                            <select onChange={(e) => {
                                
                                setCategoria(e.target.value);
                                alterarEstadoInputs(9,e);}}>

                                <option value=''>Todas</option>
                                
                                {categorias.map(item => 
                                    <option value={item.ID}>{item.Categoria}</option>)}
                            </select>

                            <label>Filtrar por animal:</label>
                            <select onChange={(e) => {
                                    setAnimal(e.target.value);
                                    alterarEstadoInputs(10,e);}}>

                                <option value=''>Todos</option>

                                {animais.map(item => 
                                    <option value={item.ID}>{item.Animal}</option>)}
                            </select>
                        </div>

                        <div className='filtros-especificos'>

                            <h4>Filtros específicos</h4>

                            <label>Procurar por data específica</label>

                            <div className='input-data-especifica'>

                                <InputMask mask='99/99/9999' maskChar=' ' value={dataEspecifica} onChange={(e) => {setDataEspecifica(e.target.value)}}/>
                                <input type='button' value='Buscar' onClick={() => {
                                        listarProdutos(); 
                                        alterarEstadoInputs(11);
                                        }}/>
                            </div>

                            <label>Filtrar por administrador que cadastrou:</label>
                            <select onChange={(e) => {
                                setAdministrador(e.target.value);
                                alterarEstadoInputs(12,e);}}>

                                <option value=''>Todos</option>

                                {administradores.map(item => 
                                
                                    <option value={item.ID}>{item.Adm}</option>)}
                            </select>
                        </div>
                    </div>
                </form>

                <section className='secao-listar-produtos'>

                    <h3 id='titulo-listagem'>Listagem de Produtos</h3>

                    <div className='container-listar-produtos'>

                        {produtos.map(item => 
                                
                            <CardProduto 
                                Capa={item.Capa} Nome={item.Nome} ID={item.ID} 
                                Categoria={item.Categoria} Animal={item.Animal} 
                                Preço={item.Preço} 
                                Disponível={item.Disponível} Desconto={item.Desconto} 
                                Vendas={item.Vendas} Estoque={item.Estoque}
                                Lançamento={item.Lançamento}
                                Avaliação={item.Avaliação} Favoritos={item.Favoritos}
                                Adm={item.Adm}
                                        
                                caminho={`/adm/produto/${item.ID}`}/>)}
                    </div>

                    {produtos.length<1 ? 
                        <div className='container-sem-resultados'>

                            <h2>Sem resultados</h2>
                        </div> 

                    : <div></div>}
                </section>
            </section>
        </div>
    );
}