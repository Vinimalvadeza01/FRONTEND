import './index.scss';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
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

    const [corInputs, setCorInputs] = useState('#EEF1DC');
    const [bordaInputs, setBordaInputs] = useState('none');

    const { id } = useParams();
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

    useEffect(() => {

        consultarInfsUsuario();
    }, []);

    return (

        <div className='page-perfil-usuario'>

            <Cabecalho />

            <div className='center'>
                <SectionDecoration />

                <div className='menu-alt'>

                    <div className='menu'>
                        <Link className='link-p' >Informações de usuário</Link>
                        <Link to='../../perfil/informacoes-de-endereco' className='link' >Informações de endereço</Link>
                        <Link to='../../perfil/favoritos' className='link' >Favoritos</Link>
                        <Link to='../../perfil/pedidos' className='link' >Meus pedidos</Link>
                        <Link className='link' >Trocar de conta</Link>
                        <Link className='link' >Sair</Link>
                    </div>
                    <hr />

                    {alterarInfs ?
                        <div className='alterar' onClick={() => { setAlterarInfs(false) }}>
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
                            placeholder="Digite seu Nome e Sobrenome"
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
                        placeholder="Digite seu E-mail ou celular"
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
                        placeholder="999.999.999-99"
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
                        placeholder="DD/MM/AAAA"
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

