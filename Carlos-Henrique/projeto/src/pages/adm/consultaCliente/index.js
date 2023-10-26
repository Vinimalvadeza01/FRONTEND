import './index.scss';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import SelectionConsulta from '../../../components/selectionConsulta';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardClienteAdm from '../../../components/card-cliente-adm';

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
    const[idEstado,setIdEstado]=useState('0');
    const[porCidade,setPorCidade]=useState(false);
    const[cidade,setCidade]=useState('');

    const[clienteEspecifico,setClienteEspecifico]=useState(false);
    const[anoNascimento,setAnoNascimento]=useState(false);
    const[porAno,setPorAno]=useState(false);
    const[ano,setAno]=useState('');

    const[clientes,setClientes]=useState([]);
    const[estados,setEstados]=useState([]);
    const[cidades,setCidades]=useState([]);

    function alterarEstadoInputs(input, e){

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

        if(input===4||input===5){

            setSemPedido(false);
        }

        if(input===6){

            setMaisPedidos(false);
            setUmPedido(false);
        }

        if(input===7){

            setEstado(null);
            setCidade(null);
            setPorEstado(false);
        }

        if(input===8||input===9){

            setSemEndereco(false);
        }

        if(input===8){

            if(e.target.value==='todos'){

                setPorEstado(false);
                setPorCidade(false);
                setEstado(null);
            }

            else{

                setPorEstado(true);
                setEstado(e.target.value);
            }
        }

        if(input===9){

            if(e.target.value==='todos'){

                setPorCidade(false);
                setCidade(null);
            }

            else{

                setPorCidade(true);
                setCidade(e.target.value);
            }
        }

        if(input===10){

            if(ano.length===4){

                setPorAno(true);

                consultarClientes();
            }

            else{

                setPorAno(false);
            }
        }
    }

    async function consultarClientes(){

        try{
        
            const url=`http://localhost:5000/cliente/adm/consulta`;

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
                ano:ano
            };

            const resp = await axios.post(url, filtros);

            setClientes(resp.data);
        }

        catch(err){

            alert('Ocorreu um erro ao listar os clientes, tente novamente mais tarde');
        }
    }

    async function listarEstados(){

        try{
            const url='https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

            let resp=await axios.get(url);

            setEstados(resp.data);
        }

        catch(err){

            alert('Ocorreu um erro ao listar os estados e as cidades, estes filtros não estarão funcionando');
        }
    }

    async function listarCidades(){

        try{

            const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios?orderBy=nome`;

            let resp=await axios.get(url);
    
            setCidades(resp.data);
        }

        catch(err){

            alert('Não foi possível listar as cidades');
        }
    }

    useEffect(() => {

        consultarClientes();
        listarEstados();
        listarCidades();
        
    }, [semFiltro,ordemAlfabetica,maisRecentes,maisAntigos,maisPedidos,umPedido,semPedido,semEndereco,porEstado,estado,porCidade,cidade,porAno]);

    return(

        <div className='page-consulta-cliente'>

            <CabecalhoAdm/>

            <SelectionConsulta tipoConsulta='Clientes' consulta1='produtos' consulta2='pedidos'/>

            <section className='container-page-consulta-adm'>

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
                                <label for='mais-recentes'>Por data de nascimento (Mais Novos)</label>
                            </div>

                            <div>
                                <input type='checkbox' id='mais-antigos' checked={maisAntigos ? 'checked' : ''} onChange={(e) => {
                                    setMaisAntigos(e.target.checked);
                                    alterarEstadoInputs(3)}}/>
                                <label for='mais-antigos'>Por data de nascimento (Mais Velhos)</label>
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
                                        alterarEstadoInputs(8,e);
                                        const estadoSelecionado = estados.find(item => item.sigla === e.target.value);
                                        setIdEstado(estadoSelecionado ? estadoSelecionado.id : '0');
                                    }}>

                                    <option value='todos'>Todos</option>
                                    {estados.map(item => 
                                        <option value={item.sigla}>{item.sigla}</option>)}
                                </select>
                            </div>

                            <div className='filtros-select-text'>
                                <label for='por-cidade'>Por cidade:</label>
                                <select onChange={(e) => {
                                        alterarEstadoInputs(9,e);
                                    }}>

                                    <option value='todos'>Selecionar</option>
                                    {cidades.map(item => 
                                        
                                        <option>{item.nome}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className='filtros-especificos'>

                            <h4>Filtros Específicos</h4>

                            <div className='filtros-select-text'>
                                <label for='por-ano'>Por ano de nascimento</label>

                                <div>

                                    <InputMask mask='9999' maskChar=' ' type='text' id='por-ano' onChange={(e) => {
                                        setAno(e.target.value);
                                        }}/>

                                    <input type='button' value='Procurar' onClick={() => {alterarEstadoInputs(10)}}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

                <div className='listagem-clientes'>

                    {clientes.map(item => 
                        <CardClienteAdm
                            Nome={item.Nome} ID={item.ID}
                            Email={item.Email}
                            CPF={item.CPF}
                            Nascimento={item.Nascimento}
                            Pedidos={item.Pedidos}
                            Senha={item.Senha}
                            Endereco={item.Endereco}
                            
                            CEP={item.CEP}
                            Estado={item.Estado}
                            Cidade={item.Cidade}
                            Bairro={item.Bairro}
                            Rua={item.Rua}
                            Número={item.Número}
                            Complemento={item.Complemento}
                        />)}
                </div>
            </section>
        </div>
    );
}