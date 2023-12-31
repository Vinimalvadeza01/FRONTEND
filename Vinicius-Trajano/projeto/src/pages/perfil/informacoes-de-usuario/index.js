import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import SectionDecoration from '../../../components/section-decoration'
import InputMask from 'react-input-mask';


export default function Perfil(){

    return (

        <div className='corpo'>
    
            <Cabecalho/>

            <div className='center'>
            <SectionDecoration/>

            <div className='menu-alt'>

                    <div className='menu'>
                        <Link className='link-p' >Informações de usuário</Link>
                        <Link to="../../perfil/informacoes-de-endereco" className='link' >Informações de endereço</Link>
                        <Link className='link' >Favoritos</Link>
                        <Link className='link' >Meus edidos</Link>
                        <Link className='link' >Trocar de conta</Link>
                        <Link className='link' >Sair</Link>
                    </div>
                    <hr/>
                    <div className='alterar'>
                        <h5>Deseja alterar alguma informação ?</h5>
                        <button>ALTERAR</button>
                    </div>

            </div>

            <div className='info'>

                <div className='Nome'>
                    <label>Nome e Sobrenome</label>
                    <InputMask
                    mask=""
                    maskChar=" "
                    placeholder="Digite seu Nome e Sobrenome"
                    className='input1'
                    type='text'
                    
                    />
                </div>

                <div className='email-celular'>
                    <label>E-mail ou número de celular</label>
                    <InputMask
                    mask=""
                    maskChar=" "
                    placeholder="Digite seu E-mail ou celular"
                    className='input2'
                    type='text'
                    />
                </div>

                <div className='cpf'>
                    <label>CPF</label>
                    <InputMask
                    mask='999.999.999-99'
                    maskChar=''
                    placeholder="999.999.999-99"
                    className='input3'
                    type='text'

                    />
                </div>
                
                <div className='nascimento'>
                    <label>Data de Nascimento</label>
                    <InputMask
                        mask="99/99/9999"
                        maskChar=" "
                        placeholder="DD/MM/AAAA"
                        className='input4'
                        type='text'
                    />          
                </div>

                <button>ALTERAR</button>

            </div>


            </div>
    
    
            <Rodape/>
    
        </div>
    
    
    
    
    )
}

