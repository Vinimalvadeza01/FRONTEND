import './index.scss';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import CardProduto from '../../../components/card-produto';
import SelectionConsulta from '../../../components/selectionConsulta';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PageConsultaClientesAdm(){

    const[semFiltro,setSemFiltro]=useState(true);

    const[ordemAlfabetica,setOrdemAlfabetica]=useState(false);
    const[maisRecentes,setMaisRecentes]=useState(false);
    const[maisAntigos,setMaisAntigos]=useState(false);

    const[maisPedidos,setMaisPedidos]=useState(false);
    const[umPedido,setUmPedido]=useState(false);
    const[semPedido,setSemPedido]=useState(false);

    const[semEndereco,setSemEndereco]=useState(false);
    const[porEstado,setPorEstado]=useState(false);
    const[estado,setEstado]=useState('');
    const[porCidade,setPorCidade]=useState(false);
    const[cidade,setCidade]=useState(false);

    const[clienteEspecifico,setClienteEspecifico]=useState(false);
    const[anoNascimento,setAnoNascimento]=useState(false);
    const[porAno,setPorAno]=useState(false);
    const[ano,setAno]=useState('');

    const[clientes,setClientes]=useState([]);

    function alterarEstadoInputs(input){

        if(input===0){

            setSemFiltro(true);

            setOrdemAlfabetica(false);
            setMaisRecentes(false);
            setMaisAntigos(false);
            setMaisPedidos(false);
            setUmPedido(false);
            setSemPedido(false);
            setSemEndereco(false);
            setPorEstado(false);
            setPorCidade(false);
            setClienteEspecifico(false);
            setAnoNascimento(false);
            setPorAno(false);
        }

        if(input>0){

            setSemFiltro(false);
        }

        if(input===2){

            setMaisAntigos(false);
        }

        if(input===3){

            setMaisRecentes(false);
        }

        if(input===6){

            setMaisPedidos(false);
            setUmPedido(false);
        }

        if(input===7){

            setEstado('');
            setCidade('');
        }

        if(input===8){

            setPorEstado(true);
        }

        if(input===9){

            setPorEstado(true);
        }

        if(input===8||input===9){

            setSemEndereco(false);
        }
    }

    async function consultarClientes(){

        const url=`http://localhost:5000/cliente/adm/consulta`;

        let dataInicial=ano+'-01-01';
        let dataFinal=ano+'-12-31';

        let filtros={

            ordemAlfabetica:ordemAlfabetica,
            nascimentoMaisVelhos:maisRecentes,
            nascimentoMaisNovos:maisAntigos,

            maisPedidos:maisPedidos,
            umPedido:umPedido,
            semPedidos:semPedido,

            semEndereco:semEndereco,
            estadoEspecifico:porEstado,
            estado:estado,
            cidadeEspecifica:porCidade,
            cidade:cidade,

            anoNascimento:porAno,
            dataInicio:dataInicial,
            dataFinal:dataFinal
        };

        const resp = await axios.post(url, filtros);

        setClientes(resp.data);
    }

    return(

        <div className='page-consulta-cliente'>

            <CabecalhoAdm/>

            <SelectionConsulta tipoConsulta='Clientes' consulta1='produtos' consulta2='pedidos'/>

            <form className='filtros'>

                <h3>Filtros</h3>

                <div className='container1-filtros'>

                    <div className='filtros-gerais'>

                        <h4>Filtros Gerais</h4>

                        <div>
                            <input type='checkbox' id='sem-filtro' checked={semFiltro ? 'checked' : ''} onChange={(e) => {
                                    alterarEstadoInputs(0)}}/>
                            <label for='sem-filtro'>Sem filtro</label>
                        </div>

                        <div>
                            <input type='checkbox' id='ordem-alfabetica' checked={ordemAlfabetica ? 'checked' : ''} onChange={(e) => {
                                setOrdemAlfabetica(e.target.checked);
                                alterarEstadoInputs(1)}}/>
                            <label for='ordem-alfabetica'>Ordem Alfabética (A-Z)</label>
                        </div>

                        <div>
                            <input type='checkbox' id='mais-recentes' checked={maisRecentes ? 'checked' : ''} onChange={(e) => {
                                setMaisRecentes(e.target.checked);
                               alterarEstadoInputs(2)}}/>
                            <label for='mais-recentes'>Por data de cadastro (Mais Recentes)</label>
                        </div>

                        <div>
                            <input type='checkbox' id='mais-antigos' checked={maisAntigos ? 'checked' : ''} onChange={(e) => {
                                setMaisAntigos(e.target.checked);
                                alterarEstadoInputs(3)}}/>
                            <label for='mais-antigos'>Por data de cadastro (Mais Antigos)</label>
                        </div>
                    </div>

                    <div className='filtros-pedido'>

                        <h4>Filtros por pedido</h4>

                        <div>
                            <input type='checkbox' id='mais-pedidos' checked={maisPedidos ? 'checked' : ''} onChange={(e) => {
                                setMaisPedidos(e.target.checked);
                                alterarEstadoInputs(4)}}/>
                            <label for='mais-pedidos'>Maior quantidade de pedidos</label>
                        </div>

                        <div>
                            <input type='checkbox' id='um-pedido' checked={umPedido ? 'checked' : ''} onChange={(e) => {
                                setUmPedido(e.target.checked);
                                alterarEstadoInputs(5)}}/>
                            <label for='um-pedido'>Que já fizeram um pedido</label>
                        </div>

                        <div>
                            <input type='checkbox' id='sem-pedidos' checked={semPedido ? 'checked' : ''} onChange={(e) => {
                                setSemPedido(e.target.checked);
                                alterarEstadoInputs(6)}}/>
                            <label for='sem-pedidos'>Que nunca fizeram um pedido</label>
                        </div>
                    </div>


                </div>

                <div className='container2-filtros'>

                    <div className='filtros-endereco'>

                        <h4>Filtros de endereço</h4>

                        <div>
                            <input type='checkbox' id='sem-endereco' checked={semEndereco ? 'checked' : ''} onChange={(e) => {
                                setSemEndereco(e.target.checked);
                                alterarEstadoInputs(7)}}/>
                            <label for='sem-endereco'>Sem Endereço confirmado</label>
                        </div>

                        <div className='filtros-select-text'>
                            <label for='por-estado'>Por estado:</label>
                            <select onChange={(e) => {
                                    setEstado(e.target.value);
                                    alterarEstadoInputs(8);
                                }}>

                                <option>Selecionar</option>
                            </select>
                        </div>

                        <div className='filtros-select-text'>
                            <label for='por-cidade'>Por cidade:</label>
                            <select onChange={(e) => {
                                    setCidade(e.target.value); 
                                    alterarEstadoInputs(9);
                                }}>

                                <option>Selecionar</option>
                            </select>
                        </div>
                        </div>

                    <div className='filtros-especificos'>

                        <h4>Filtros Específicos</h4>

                        <div className='filtros-select-text'>
                            <label for='por-ano'>Por ano de nascimento</label>
                            <InputMask mask='9999' maskChar=' ' type='text' id='por-ano' onChange={(e) => {
                                setAno(e.target.value);
                                alterarEstadoInputs(10)
                                setPorAno(e.target.value)}}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}