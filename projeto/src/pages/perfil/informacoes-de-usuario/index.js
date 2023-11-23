import './index.scss';
import axios from 'axios';
import storage from 'local-storage';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import SectionDecoration from '../../../components/section-decoration'
import InputMask from 'react-input-mask';
import { useState, useEffect } from 'react';

export default function Perfil() {

    const [infsCliente, setInfsCliente] = useState({});

    const [infNome, setInfNome] = useState('');
    const [infEmail, setInfEmail] = useState('');
    const [infCPF, setInfCPF] = useState('');
    const [infNascimento, setInfNascimento] = useState('');

    const [alterarInfs, setAlterarInfs] = useState(true);
    const[divSair,setDivSair]=useState(false);

    const [corInputs, setCorInputs] = useState('#EEF1DC');
    const [bordaInputs, setBordaInputs] = useState('none');

    const { id } = useParams();
    const navigate=useNavigate();

    const [erro, setErro] = useState('');

    async function consultarInfsUsuario() {

        try {

            const url = `http://localhost:5000/cliente/perfil/consulta/${id}`;

            const consultarInfs = await axios.get(url, id);

            let formatarData = consultarInfs.data.Nascimento.substr(0, 10).split('-');

            setInfsCliente(consultarInfs.data);

            setInfNome(consultarInfs.data.Nome);
            setInfEmail(consultarInfs.data.Email);
            setInfCPF(consultarInfs.data.CPF);
            setInfNascimento(`${formatarData[2]}/${formatarData[1]}/${formatarData[0]}`);
        }

        catch (err) {

            alert('Ocorreu um erro e não foi possível consultar suas informações');
        }
    }

    async function finalizarAlteracoes() {

        try {

            const url = `http://localhost:5000/cliente/alterar`;

            let formatarData=infNascimento.split('/');

            const ano=formatarData[2].replace(/\ /g);
            const mes=formatarData[1].replace(/\ /g);
            const dia=formatarData[0].replace(/\ /g);

            let dataFormatada=`${ano}-${mes}-${dia}`;

            let formatarCPF = infCPF.replace(/\./g, '');
            formatarCPF = formatarCPF.replace(/-/g, '');

            if (formatarData.length!==3) {

                throw new Error('Data Inválida');
            }
        
            if (ano.length!==4||mes.length!==2||dia.length!==2){
        
                throw new Error('Data inválida');
            }

            const dadosAlteracao = {

                nome: infNome,
                email: infEmail,
                cpf: formatarCPF,
                nasc: dataFormatada,
                senha: infsCliente.Senha,
                pedidos: infsCliente.Pedidos,
                endereco: infsCliente.Endereco_ID,
                ID: id
            };

            const alterar = await axios.put(url,dadosAlteracao);

            window.location.reload();
        }

        catch (err) {

            if (err.response) {

                setErro(err.response.data.erro);
            }

            else {

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

        consultarInfsUsuario();
        setErro('');
    }

    function sair(){

        storage.remove('usuario-logado');
        navigate('/login');
    }

    useEffect(() => {

        if (!storage('usuario-logado')){

            navigate('/login');
        }

        if(id!==storage('usuario-logado').ID){
        
            navigate(`/perfil/cliente/${storage('usuario-logado').ID}`);
        }

        consultarInfsUsuario();
    }, []);

    return (

        <div className='page-perfil-usuario'>

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
            
            <div className='center'>

                <SectionDecoration />

                <div className='menu-alt'>

                    <div className='menu'>
                        <Link className='link-p' >Informações de usuário</Link>
                        <Link to={`../../perfil/endereco/${id}`} className='link' >Informações de endereço</Link>
                        <Link to='../../perfil/favoritos' className='link' >Favoritos</Link>
                        <button className='link' onClick={() => {setDivSair(true)}}>Sair</button>
                    </div>
                    <hr />

                    {alterarInfs ?
                        <div className='alterar' onClick={() => {setAlterarInfs(false) }}>
                            <h5>Deseja alterar alguma informação ?</h5>
                            <button onClick={alterar}>ALTERAR</button>
                        </div>

                        : <div className='div-buttons-alteracao'>
                            <button id='button-alterar1' onClick={finalizarAlteracoes}>FINALIZAR ALTERAÇÕES</button>
                            <button id='button-alterar2' onClick={cancelar}>CANCELAR</button>
                        </div>}

                </div>

                <div className='info'>

                    <div className='Nome'>
                        <label>Nome e Sobrenome</label>
                        <InputMask
                            mask=""
                            maskChar=" "
                            value={infNome}
                            onChange={(e) => { setInfNome(e.target.value) }}
                            className='input1'
                            type='text'
                            readOnly={alterarInfs}
                            style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                        />
                    </div>


                    <label>E-mail ou número de celular</label>
                    <InputMask
                        mask=""
                        maskChar=" "
                        value={infEmail}
                        onChange={(e) => { setInfEmail(e.target.value) }}
                        className='input2'
                        type='text'
                        readOnly={alterarInfs}
                        style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                    />

                    <label>CPF</label>
                    <InputMask
                        mask='999.999.999-99'
                        maskChar=''
                        value={infCPF}
                        onChange={(e) => { setInfCPF(e.target.value) }}
                        className='input3'
                        type='text'
                        readOnly={alterarInfs}
                        style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                    />

                    <label>Data de Nascimento</label>
                    <InputMask
                        mask="99/99/9999"
                        maskChar=" "
                        value={infNascimento}
                        onChange={(e) => { setInfNascimento(e.target.value) }}
                        className='input4'
                        type='text'
                        readOnly={alterarInfs}
                        style={{ backgroundColor: `${corInputs}`, border: `${bordaInputs}` }}
                    />

                    <div className='div-erro'>
                        <span className='mensagem-erro'>{erro}</span>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>

    )
}

