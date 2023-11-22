import './index.scss';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import SelectionConsulta from '../../../components/selectionConsulta';
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

    const[clienteEspecifico,setClienteEspecifico]=useState(true);
    const[cliente,setCliente]=useState('');
    const[anoNascimento,setAnoNascimento]=useState(false);
    const[porAno,setPorAno]=useState(false);
    const[ano,setAno]=useState('');
    const[erroAno,setErroAno]=useState('');

    const[clientes,setClientes]=useState([]);
    const[estados,setEstados]=useState([]);
    const[cidades,setCidades]=useState([]);

    function alterarEstadoInputs(input, e){
        
        if(input===0){

            setOrdemAlfabetica(false);
            setMaisRecentes(false);
            setMaisAntigos(false);
            setMaisPedidos(false);
            setUmPedido(false);
            setSemPedido(false);
            setSemEndereco(false);
            setPorEstado(false);
            setEstado('todos');
            setPorCidade(false);
            setCidade('todos');
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

            consultarClientes();
        }
    }

    async function consultarClientes(){

        try{
        
            const url=`http://localhost:5000/cliente/adm/consulta`;

            if(!ano){

                setPorAno(false);
            }

            else if(ano.length!==4){

                setPorAno(false);
                
                throw new Error('Ano Inválido');
            }

            else{

                setPorAno(true);
            }

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
                ano:ano,
                clienteEspecifico:clienteEspecifico,
                cliente:cliente
            };

            const resp = await axios.post(url,filtros);

            setClientes(resp.data);
            setErroAno('');
        }

        catch(err){

            if(err.message){

                setErroAno(err.message);
            }

            else{

                alert('Ocorreu um erro ao listar os clientes, tente novamente mais tarde');
            }
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
        
    }, [semFiltro,ordemAlfabetica,maisRecentes,maisAntigos,maisPedidos,umPedido,semPedido,semEndereco,porEstado,estado,porCidade,cidade,porAno,cliente]);

    return(

        <div className='page-consulta-cliente'>

            <CabecalhoAdm/>

            <SelectionConsulta tipoConsulta='Clientes' consulta1='produtos' consulta2='pedidos'/>

            <section className='container-page-consulta-adm'>

                <div className='container-pesquisa'> 

                    <label for='produto-especifico'>Procurar por cliente específico:</label>
                    <p id='especificador-input'>(Nome, CPF ou Email)</p>

                    <div className='container-search'>

                        <input type='text' value={cliente} onChange={(e) => {setCliente(e.target.value)}}/>
                        <svg  id='icon-lupa' width="20" height="20" viewBox="0 0 30 30" fill="#3D5745" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3762 12.1857C24.3762 14.8748 23.5031 17.3588 22.0323 19.3741L29.4507 26.7969C30.1831 27.5292 30.1831 28.7185 29.4507 29.4508C28.7182 30.1831 27.5287 30.1831 26.7962 29.4508L19.3779 22.028C17.3622 23.5044 14.8777 24.3714 12.1881 24.3714C5.45534 24.3714 0 18.9172 0 12.1857C0 5.45428 5.45534 0 12.1881 0C18.9208 0 24.3762 5.45428 24.3762 12.1857ZM12.1881 20.622C13.2962 20.622 14.3934 20.4038 15.4171 19.9798C16.4409 19.5558 17.3711 18.9344 18.1546 18.1511C18.9381 17.3677 19.5597 16.4377 19.9837 15.4141C20.4078 14.3906 20.626 13.2936 20.626 12.1857C20.626 11.0778 20.4078 9.98083 19.9837 8.9573C19.5597 7.93376 18.9381 7.00375 18.1546 6.22038C17.3711 5.437 16.4409 4.81559 15.4171 4.39162C14.3934 3.96766 13.2962 3.74945 12.1881 3.74945C11.08 3.74945 9.98278 3.96766 8.95905 4.39162C7.93531 4.81559 7.00512 5.437 6.22159 6.22038C5.43806 7.00375 4.81653 7.93376 4.39248 8.9573C3.96844 9.98083 3.75018 11.0778 3.75018 12.1857C3.75018 13.2936 3.96844 14.3906 4.39248 15.4141C4.81653 16.4377 5.43806 17.3677 6.22159 18.1511C7.00512 18.9344 7.93531 19.5558 8.95905 19.9798C9.98278 20.4038 11.08 20.622 12.1881 20.622Z" fill="3D5745" />
                        </svg>
                    </div>
                </div>

                <form className='filtros'>

                    <h3>Filtros</h3>

                    <div className='container1-filtros'>

                        <div className='filtros-gerais'>

                            <h4>Filtros Gerais</h4>

                            <div>
                                <input type='button' id='limpar-filtros' value='Limpar Filtros' onClick={(e) => {
                                        alterarEstadoInputs(0)}}/>
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
                                <label for='por-ano'>Por ano de nascimento:</label>

                                <div>

                                    <input type='number' id='por-ano' onChange={(e) => {
                                        setAno(e.target.value);
                                        }}/>

                                    <input type='button' value='Procurar' onClick={() => {alterarEstadoInputs(10)}}/>
                                
                                    <p>{erroAno}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className='listagem-clientes'>

                    <h3 id='titulo-listagem'>{clientes.length<1 ? 'Sem resultados' : 'Resultados encontrados: '+clientes.length}</h3>
                    
                    <div className='container-listar-clientes'>
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

                                caminho={`/adm/cliente/${item.ID}`}
                            />)}
                    </div>
                </div>
            </section>
        </div>
    );
}