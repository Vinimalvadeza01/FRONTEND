import './index.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

    const [alterarInfs, setAlterarInfs] = useState(true);

    const [corInputs, setCorInputs] = useState('#EEF1DC');
    const [bordaInputs, setBordaInputs] = useState('none');

    const[erro,setErro]=useState('');
    const { id } = useParams();

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

    useEffect(() => {

        consultarInfsEndereco();
    },[]);

    return(

        <div className='pag-endereco'>

            <Cabecalho />

            <div className='endereco-container'>

                <SectionDecoration />

                <div className='endereco-altmenu'>

                    <div className='endereco-menu'>
                        <Link to={`../../perfil/cliente/${id}`} className='link'>Informações de Usuário</Link>
                        <Link className='link-p'>Informações de Endereco</Link>
                        <Link to="../../perfil/favoritos" className='link'>Favoritos</Link>
                        <Link className='link'>Sair</Link>
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

                            <InputMask
                                mask=''
                                maskChar=''
                                type='text'
                                value={infEstado}
                                onChange={(e) => {setInfEstado(e.target.value)}}
                                readOnly={alterarInfs}
                                style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                            />
                        </div>

                        <div className='cidade'>

                            <label>Cidade</label>

                            <InputMask
                                mask=''
                                maskChar=''
                                type='text'
                                value={infCidade}
                                onChange={(e) => {setInfCidade(e.target.value)}}
                                readOnly={alterarInfs}
                                style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                            />

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