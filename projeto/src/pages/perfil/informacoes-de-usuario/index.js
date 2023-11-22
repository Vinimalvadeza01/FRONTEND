import './index.scss';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import SectionDecoration from '../../../components/section-decoration'
import InputMask from 'react-input-mask';
import { useState, useEffect } from 'react';

export default function Perfil(){

    const[infNome,setInfNome]=useState('');
    const[infEmail,setInfEmail]=useState('');
    const[infCPF,setInfCPF]=useState('');
    const[infNascimento,setInfNascimento]=useState('');

    const[alterarInfs,setAlterarInfs]=useState(true);

    const[corInputs,setCorInputs]=useState('#EEF1DC');
    const[bordaInputs,setBordaInputs]=useState('none');

    const {id}=useParams();

    async function consultarInfsUsuario(){

        try{

            const url=`http://localhost:5000/cliente/perfil/consulta/${id}`;

            const consultarInfs=await axios.get(url,id);

            let formatarData=consultarInfs.data.Nascimento.substr(0,10).split('-');

            setInfNome(consultarInfs.data.Nome);
            setInfEmail(consultarInfs.data.Email);
            setInfCPF(consultarInfs.data.CPF);
            setInfNascimento(`${formatarData[2]}/${formatarData[1]}/${formatarData[0]}`);
        }

        catch(err){

            alert('Ocorreu um erro e não foi possível consultar suas informações');
        }
    }

    function alterar(){

        setCorInputs('#FFF');
        setBordaInputs('1px solid #3D5745');
        setAlterarInfs(false);
    }

    function cancelar(){

        setCorInputs('#EEF1DC');
        setBordaInputs('none');
        setAlterarInfs(true);

        consultarInfsUsuario();
    }

    useEffect(() => {

        consultarInfsUsuario();
    },[]);

    return (

        <div className='page-perfil-usuario'>
    
            <Cabecalho/>

            <div className='center'>
            <SectionDecoration/>

            <div className='menu-alt'>

                    <div className='menu'>
                        <Link className='link-p' >Informações de usuário</Link>
                        <Link to='../../perfil/informacoes-de-endereco' className='link' >Informações de endereço</Link>
                        <Link to='../../perfil/favoritos' className='link' >Favoritos</Link>
                        <Link to='../../perfil/pedidos' className='link' >Meus pedidos</Link>
                        <Link className='link' >Trocar de conta</Link>
                        <Link className='link' >Sair</Link>
                    </div>
                    <hr/>

                    {alterarInfs ?
                        <div className='alterar' onClick={() => {setAlterarInfs(false)}}>
                            <h5>Deseja alterar alguma informação ?</h5>
                            <button onClick={alterar}>ALTERAR</button>
                        </div>

                    :   <div className='div-buttons-alteracao'> 
                            <button id='button-alterar1'>FINALIZAR ALTERAÇÕES</button>
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
                    onChange={(e) => {setInfNome(e.target.value)}}
                    placeholder="Digite seu Nome e Sobrenome"
                    className='input1'
                    type='text'
                    readOnly={alterarInfs}
                    style={{backgroundColor:`${corInputs}`, border:`${bordaInputs}`}}
                    />
                </div>

                
                    <label>E-mail ou número de celular</label>
                    <InputMask
                    mask=""
                    maskChar=" "
                    value={infEmail}
                    onChange={(e) => {setInfEmail(e.target.value)}}
                    placeholder="Digite seu E-mail ou celular"
                    className='input2'
                    type='text'
                    readOnly={alterarInfs}
                    style={{backgroundColor:`${corInputs}`, border:`${bordaInputs}`}}
                    />
                
                    <label>CPF</label>
                    <InputMask
                    mask='999.999.999-99'
                    maskChar=''
                    value={infCPF}
                    onChange={(e) => {setInfCPF(e.target.value)}}
                    placeholder="999.999.999-99"
                    className='input3'
                    type='text'
                    readOnly={alterarInfs}
                    style={{backgroundColor:`${corInputs}`, border:`${bordaInputs}`}}
                    />
                
                    <label>Data de Nascimento</label>
                    <InputMask
                        mask="99/99/9999"
                        maskChar=" "
                        value={infNascimento}
                        onChange={(e) => {setInfNascimento(e.target.value)}}
                        placeholder="DD/MM/AAAA"
                        className='input4'
                        type='text'
                        readOnly={alterarInfs}
                        style={{backgroundColor:`${corInputs}`, border:`${bordaInputs}`}}
                    />          
            </div>
            </div>
            <Rodape/>
        </div>

    )
}

