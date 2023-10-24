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
    const[estado,setEstado]=useState(false);
    const[cidade,setCidade]=useState(false);

    const[clienteEspecifico,setClienteEspecifico]=useState(false);
    const[anoNascimento,setAnoNascimento]=useState(false);
    const[ano,setAno]=useState('');

    function alterarEstadoInputs(input){}

    return(

        <div className='page-consulta-cliente'>

            <CabecalhoAdm/>

            <SelectionConsulta tipoConsulta='Clientes' consulta1='produtos' consulta2='pedidos'/>

            <form className='filtros'>

                <h3>Filtros</h3>

                <div className='container-filtros'>

                    <div className='filtros-gerais'>

                        <h4>Filtros Gerais</h4>

                        <div>
                            <input type='checkbox' id='sem-filtro' checked={semFiltro ? 'checked' : ''} onChange={(e) => {
                                    alterarEstadoInputs(0)}}/>
                            <label for='sem-filtro'>Sem filtro</label>
                        </div>

                        <div>
                            <input type='checkbox' id='ordem-alfabetica' checked={ordemAlfabetica ? 'checked' : ''} onChange={(e) => {
                                alterarEstadoInputs(1)}}/>
                            <label for='ordem-alfabetica'>Ordem Alfabética (A-Z)</label>
                        </div>

                        <div>
                            <input type='checkbox' id='mais-recentes' checked={maisRecentes ? 'checked' : ''} onChange={(e) => {
                                alterarEstadoInputs(2)}}/>
                            <label for='mais-recentes'>Por data de cadastro (Mais Recentes)</label>
                        </div>

                        <div>
                            <input type='checkbox' id='mais-antigos' checked={maisAntigos ? 'checked' : ''} onChange={(e) => {
                                alterarEstadoInputs(3)}}/>
                            <label for='mais-antigos'>Por data de cadastro (Mais Antigos)</label>
                        </div>
                    </div>

                    <div className='filtros-pedido'>

                        <div>
                            <input type='checkbox' id='mais-pedidos' checked={maisPedidos ? 'checked' : ''} onChange={(e) => {
                                alterarEstadoInputs(4)}}/>
                            <label for='mais-pedidos'>Maior quantidade de pedidos</label>
                        </div>

                        <div>
                            <input type='checkbox' id='um-pedido' checked={umPedido ? 'checked' : ''} onChange={(e) => {
                                alterarEstadoInputs(5)}}/>
                            <label for='um-pedido'>Que já fizeram um pedido</label>
                        </div>

                        <div>
                            <input type='checkbox' id='sem-pedidos' checked={semPedido ? 'checked' : ''} onChange={(e) => {
                                alterarEstadoInputs(6)}}/>
                            <label for='sem-pedidos'>Que nunca fizeram um pedido</label>
                        </div>
                    </div>

                    <div className='filtros-endereco'>

                        <div>
                            <input type='checkbox' id='sem-endereco' checked={semEndereco ? 'checked' : ''} onChange={(e) => {
                                alterarEstadoInputs(7)}}/>
                            <label for='sem-endereco'>Sem Endereço confirmado</label>
                        </div>

                        <div>
                            <label for='por-estado'>Por estado:</label>
                            <select onChange={(e) => {setEstado(e.target.value)}}>Selecionar</select>
                        </div>

                        <div>
                            <label for='por-cidade'>Por cidade:</label>
                            <select on onChange={(e) => {setCidade(e.target.value)}}>Selecionar</select>
                        </div>
                    </div>

                    <div className='filtros-especificos'>

                        <div>
                            <label for='por-ano'>Por ano de nascimento</label>
                            <InputMask mask='9999' maskChar=' ' type='text' id='por-ano' onChange={(e) => {
                                alterarEstadoInputs(10)
                                setAno(e.target.value)}}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}