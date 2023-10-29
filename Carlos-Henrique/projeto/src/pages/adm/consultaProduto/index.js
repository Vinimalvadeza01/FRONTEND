import './index.scss';
import InputMask from 'react-input-mask';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import CardProduto from '../../../components/card-produto-adm';
import SelectionConsulta from '../../../components/selectionConsulta';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PageConsultaProdutosAdm(){

    // Variáveis para definir os valores para API e alterar o estado dos inputs de check para checked
    const[semFiltro,setSemFiltro]=useState(true);

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

        if(!maisVendidos && !melhorAvaliados && !maisFavoritados && !semEstoque && !menorEstoque && !maisRecentes && !naoLancados && !semLancamento){

            setSemFiltro(true);
        }

        // Para quando clicar no input de "Sem filtro" desmarcar todos os outros
        if(input===0){

            setSemFiltro(true);

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

        // Para desmarcar o input de "Sem filtro" quando clicar nos outros
        else if(input>0){

            setSemFiltro(false);
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

            let lancamentoEspecifico=false;
            const formatarData=dataEspecifica.split('/');
            let dataFormatada='';

            const ano=formatarData[2];
            const mes=formatarData[1];
            const dia=formatarData[0];

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

    }, [semFiltro,maisVendidos,melhorAvaliados,maisFavoritados,maisRecentes,naoLancados,semLancamento,semEstoque,menorEstoque,porCategoria,categoria,porAnimal,animal,porAdm,administrador]);

    return(

        <div className='page-consulta-produto'>

            <CabecalhoAdm/>

            <SelectionConsulta tipoConsulta='Produtos' consulta1='clientes' consulta2='pedidos'/>

            <section className='container-page'>

                <form className='filtros'>

                    <h3>Filtros</h3>

                    <div className='container-filtro'>

                        <div className='filtros-gerais'>

                            <h4>Filtros Gerais</h4>

                            <div>
                                <input type='checkbox' id='sem-filtro' checked={semFiltro ? 'checked' : ''} onChange={(e) => {
                                    alterarEstadoInputs(0)}}/>
                                <label for='sem-filtro'>Sem filtro</label>
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
                                <input type='button' value='buscar' onClick={() => {
                                        listarProdutos(); 
                                        alterarEstadoInputs(11);
                                        }}/>
                            </div>
                           
                            <label>Procurar produto por nome ou ID:</label>
                            <input/>

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
                </section>
            </section>
        </div>
    );
}