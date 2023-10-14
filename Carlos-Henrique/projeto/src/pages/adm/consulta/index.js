import './index.scss';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import axios from 'axios';

export default function PageConsultaAdm(){

    // Variáveis para definir os valores para API e alterar o estado dos inputs de check para checked
    const[semFiltro,setSemFiltro]=useState(true);

    const[maisVendidos,setMaisVendidos]=useState(false);
    const[melhorAvaliados,setMelhorAvaliados]=useState(false);
    const[maisFavoritados,setMaisFavoritados]=useState(false);

    const[semEstoque,setSemEstoque]=useState(false);
    const[menorEstoque,setMenorEstoque]=useState(false);

    const[maisRecentes,setMaisRecentes]=useState(false);
    const[naoLancados,setNaoLancados]=useState(false);
    const[semLancamento,setSemLancamento]=useState(false);

    const[dataEspecifica,setDataEspecifica]=useState('');

    // Variável para guardar o valor dos produtos
    const[produtos,setProdutos]=useState([]);

    // Para evitar que certos inputs sejam marcados ao mesmo tempo
    function alterarEstadoInputs(input){

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

        // Para não haver conflito nos filtros de estoque
        if(input===4){

            setMenorEstoque(false);
        }

        else if(input===5){

            setSemEstoque(false);
        }

        // Evitar conflitos nos filtros de data
        if(input===6){

            setNaoLancados(false);
            setSemLancamento(false);

            setDataEspecifica('');
        }

        else if(input===7||input===8){

            setMaisRecentes(false);

            setDataEspecifica('');
        }
    }

    async function listarProdutos(){

        const url='http://localhost:5000/produto/consulta/adm';

        let lancamentoEspecifico=false;

        if(dataEspecifica!==''){

            lancamentoEspecifico=true;
        }

        let filtros = {

            semEstoque:semEstoque,
            naoDisponivel:naoLancados,
            semLancamento:semLancamento,
            lancamentoEspecifico:lancamentoEspecifico,
            dataEspecifica:dataEspecifica,

            vendas:maisVendidos,
            avaliacao:melhorAvaliados,
            qtdFavoritos:maisFavoritados,
            qtdEstoque:menorEstoque,
            lancamento:maisRecentes
        };

        const resp=await axios.get(url,filtros);

        setProdutos(resp.data);
    }

    return(

        <div className='page-consulta-adm'>

            <CabecalhoAdm/>

            <section className='section-produtos'>

                <form className='filtros'>

                    <h3>Filtros</h3>

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

                    <div className='filtros-estoque'>

                        <h4>Filtros de Estoque</h4>

                        <div>
                            <input type='checkbox' id='sem-estoque' checked={semEstoque ? 'checked' : ''} onChange={(e) => {
                                setSemEstoque(e.target.checked); 
                                alterarEstadoInputs(4)}}/>
                            <label for='sem-estoque'>Fora de estoque</label>
                        </div>

                        <div>
                            <input type='checkbox' id='menor-quantidade' checked={menorEstoque ? 'checked' : ''} onChange={(e) => {
                                setMenorEstoque(e.target.checked); 
                                alterarEstadoInputs(5)}}/>
                            <label for='menor-quantidade'>Menor quantidade em estoque</label>
                        </div>

                    </div>

                    <div className='filtros-data'>

                        <h4>Filtros por data</h4>

                        <div>
                            <input type='checkbox' id='recentes' checked={maisRecentes ? 'checked' : ''} onChange={(e) => {
                                setMaisRecentes(e.target.checked); 
                                alterarEstadoInputs(6)}}/>
                            <label for='recentes'>Cadastrados recentemente</label>
                        </div>

                        <div>
                            <input type='checkbox' id='nao-lancados' checked={naoLancados ? 'checked' : ''} onChange={(e) => {
                                setNaoLancados(e.target.checked); 
                                alterarEstadoInputs(7)}}/>
                            <label for='nao-lancados'>Não lançados</label>
                        </div>

                        <div>
                            <input type='checkbox' id='sem-data-lancamento' checked={semLancamento ? 'checked' : ''} onChange={(e) => {
                                setSemLancamento(e.target.checked); 
                                alterarEstadoInputs(8)}}/>
                            <label for='sem-data-lancamento'>Sem data de lançamento</label>
                        </div>
                    </div>

                    <div className='filtros-especificos'>

                        <h4>Filtros específicos</h4>

                        <label for='data-especifica'>Por data específica</label>

                        <div>
                            <InputMask mask="99/99/9999" maskChar=" " id='data-especifica' value={dataEspecifica} onChange={(e) => {
                                setDataEspecifica(e.target.value);
                                setMaisRecentes(false);
                                setNaoLancados(false);
                                setSemLancamento(false)}}/>

                            <input value='Procurar' type='button' onClick={listarProdutos} id='botao-procurar'/>
                        </div>
                        

                        {/* Adicionar filtros por adm, animal e categoria na API e aqui*/}
                    </div>
                </form>

                <table className='listagem-produtos'>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Capa</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Animal</th>
                            <th>Vendas</th>
                            <th>Estoque</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Disponível</th>
                            <th>Data de Lançamento</th>
                            <th>Avaliação</th>
                            <th>Cadastrado por</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>

                        {produtos.map(item => 
                        
                            <tr>

                                <td>{item.ID}</td>

                                <td>
                                    <img src={item.Capa}/>
                                </td>

                                <td>{item.Nome}</td>

                                <td>{item.Categoria}</td>

                                <td>{item.Animal}</td>

                                <td>{item.Vendas}</td>

                                <td>{item.Estoque}</td>

                                <td>{item.Preço}R$</td>

                                <td>{item.Desconto===0 ? 'Sem desconto' : item.Desconto+'%'}</td>

                                <td>{item.Disponível===1 ? 'Sim' : 'Não'}</td>

                                <td>{item.Lançamento==='2099-01-01' ? 'Não disponível' : item.Lançamento}</td>

                                <td>{item.Avaliação}</td>

                                <td>{item.Adm}</td>
                                
                                <td>

                                    <button>Ver produto</button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </section>

            <section className='section-clientes'></section>

            <section className='section-pedidos'></section>
        </div>
    );
}