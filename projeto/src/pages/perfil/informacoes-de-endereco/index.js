import './index.scss';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import SectionDecoration from '../../../components/section-decoration'
import InputMask from 'react-input-mask';
import axios from 'axios';

export default function Endereco() {

    const[infsEndereco,setInfsEndereco]=useState({});

    const[infCEP,setInfCEP]=useState('');
    const[infRua,setInfRua]=useState('');
    const[infBairro,setInfBairro]=useState('');
    const[infNumero,setInfNumero]=useState('');
    const[infEstado,setInfEstado]=useState('');
    const[infComplemento,setInfComplemento]=useState('');
    const[infCidade,setInfCidade]=useState('');

    const[alterarInfs, setAlterarInfs]=useState(true);
    const[divSair,setDivSair]=useState(false);

    const[corInputs, setCorInputs]=useState('#EEF1DC');
    const[bordaInputs,setBordaInputs]=useState('none');

    const[estados,setEstados]=useState([]);
    const[cidades,setCidades]=useState([]);
    const[IDEstado,setIDEstado]=useState(0);

    const[erro,setErro]=useState('');
    const { id } = useParams();
    const navigate=useNavigate();

    async function consultarInfsEndereco(){

        const url=`http://localhost:5000/endereco/perfil/consulta/${id}`;

        const consulta=await axios.get(url);

        setInfsEndereco(consulta.data);

        setInfCEP(consulta.data.CEP);
        setInfRua(consulta.data.Rua);
        setInfBairro(consulta.data.Bairro);
        setInfNumero(consulta.data.Numero);
        setInfComplemento(consulta.data.Complemento);
        setInfEstado(consulta.data.Estado);
        setInfCidade(consulta.data.Cidade);
    }
    
    async function finalizarAlteracoes(){

        try{
            const url=`http://localhost:5000/endereco/alterar`;

            const cepFormatado=infCEP.replace(/\-/g, '');

            const dadosAlterarEndereco={

                cliente:id,
                cep:cepFormatado,
                rua:infRua,
                bairro:infBairro,
                numero:infNumero,
                estado:infEstado,
                cidade:infCidade,
                ID:infsEndereco.ID
            };

            const alterar=await axios.put(url,dadosAlterarEndereco);

            window.location.reload();
        }

        catch(err){

            if(err.response){

                setErro(err.response.data.erro);
            }

            else{

                setErro(err.message);
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
    
          const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${IDEstado}/municipios?orderBy=nome`;
    
          let resp=await axios.get(url);
    
          setCidades(resp.data);
        }
    
        catch(err){
    
          alert('Não foi possível listar as cidades');
        }
    }

    function alterar() {

        setCorInputs('#FFF');
        setBordaInputs('1px solid #3D5745');
        setAlterarInfs(false);
    }

    function cancelar() {

        setCorInputs('#EEF1DC');
        setBordaInputs('none');
        setAlterarInfs(true);

        consultarInfsEndereco();
        setErro('');
    }

    function sair(){

        storage.remove('usuario-logado');
        navigate('/login');
    }

    useEffect(() => {
        
        consultarInfsEndereco();
        listarEstados();
        listarCidades();

        if (!storage('usuario-logado')){

            navigate('/login');
        }

        if(id!==storage('usuario-logado').ID){
        
            navigate(`/perfil/endereco/${storage('usuario-logado').ID}`);
        }

    },[IDEstado]);

    return(

        <div className='pag-endereco'>

            <Cabecalho />

            {divSair ?
                <div className='div-sair'>

                    <div className='acoes-sair'>

                        <SectionDecoration/>

                        <div className='container-sair'>
                            <h2>Tem certeza que deseja sair da sua conta ?</h2>

                            <div className='sub-container-buttons-confirmar'>
                                <button id='button1-sair' onClick={sair}>CONFIRMAR</button>
                                <button id='button2-sair' onClick={() => {setDivSair(false)}}>CANCELAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            : ''}

            <div className='endereco-container'>

                <SectionDecoration />

                <div className='endereco-altmenu'>

                    <div className='endereco-menu'>
                        <Link to={`../../perfil/cliente/${id}`} className='link'>Informações de Usuário</Link>
                        <Link className='link-p'>Informações de Endereco</Link>
                        <Link to="../../perfil/favoritos" className='link'>Favoritos</Link>
                        <button className='link' onClick={() => {setDivSair(true)}}>Sair</button>
                    </div>

                    <hr/>

                    {alterarInfs ?
                        <div className='endereco-alterar' onClick={() => { setAlterarInfs(false) }}>
                            <h5>Deseja alterar alguma informação ?</h5>
                            <button onClick={alterar}>ALTERAR</button>
                        </div>

                        : <div className='div-buttons-alteracao'>
                            <button id='button-alterar1' onClick={finalizarAlteracoes}>FINALIZAR ALTERAÇÕES</button>
                            <button id='button-alterar2' onClick={cancelar}>CANCELAR</button>
                        </div>}
                </div>

                <div className='endereco-infos'>

                    <label>CEP</label>
                    <InputMask
                        mask='99999-999'
                        maskChar=''
                        type='text'
                        value={infCEP}
                        onChange={(e) => {setInfCEP(e.target.value)}}
                        readOnly={alterarInfs}
                        style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                    />

                    <label>Rua</label>
                    <InputMask
                        mask=''
                        maskChar=''
                        type='text'
                        value={infRua}
                        onChange={(e) => {setInfRua(e.target.value)}}
                        readOnly={alterarInfs}
                        style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                    />

                    <label>Bairro</label>
                    <InputMask
                        mask=''
                        maskChar=''
                        type='text'
                        value={infBairro}
                        onChange={(e) => {setInfBairro(e.target.value)}}
                        readOnly={alterarInfs}
                        style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                    />

                    <div className='endereco-complementos'>

                        <div className='numero'>

                            <label>Nº</label>
                            <InputMask
                                mask=''
                                maskChar=''
                                type='text'
                                value={infNumero}
                                onChange={(e) => {setInfNumero(e.target.value)}}
                                readOnly={alterarInfs}
                                style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                            />
                        </div>

                        <div className='complemento'>

                            <label>Complemento</label>
                            <InputMask
                                mask=''
                                maskChar=''
                                type='text'
                                value={infComplemento}
                                onChange={(e) => {setInfComplemento(e.target.value)}}
                                readOnly={alterarInfs}
                                style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                            />
                        </div>
                    </div>

                    <div className='endereco-ec'>

                        <div className='estado'>

                            <label>Estado</label>

                            {alterarInfs ?
                                <InputMask
                                    mask=''
                                    maskChar=''
                                    type='text'
                                    value={infEstado}
                                    readOnly
                                    style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                                />
                            : 
                                <select onChange={(e) => {
                                    setInfEstado(e.target.value);
                                    const estadoSelecionado = estados.find(item => item.sigla === e.target.value);
                                    setIDEstado(estadoSelecionado ? estadoSelecionado.id : 0);
                                }}>
      
                                    <option value=''>Selecionar</option>
                                    {estados.map(item => 
                                    <option value={item.sigla}>{item.sigla}</option>)}
                                </select>
                            }
                        </div>

                        <div className='cidade'>

                            <label>Cidade</label>

                            {alterarInfs ?<InputMask
                                mask=''
                                maskChar=''
                                type='text'
                                value={infCidade}
                                onChange={(e) => {setInfCidade(e.target.value)}}
                                readOnly={alterarInfs}
                                style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                            />
                            :                   
                                <select onChange={(e) => {setInfCidade(e.target.value);}}>
                                    <option value='todos'>Selecionar</option>
                                    {cidades.map(item => 
                                    <option value={item.nome}>{item.nome}</option>)}
                                </select>}

                        </div>
                    </div>

                    <div className='div-erro'>
                            <span className='mensagem-erro'>{erro}</span>
                    </div>
                </div>
            </div>

            <Rodape />
        </div>
    )
}