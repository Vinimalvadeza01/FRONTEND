import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import SectionDecoration from '../../components/section-decoration';


export default function Perfil(){

    return (

        <div className='corpo'>
    
            <Cabecalho/>

            <div className='center'>
            <SectionDecoration/>

            <div className='menu-alt'>

                    <div className='menu'>
                        <Link className='link-p' >Informações de usuário</Link>
                        <Link className='link' >Informações de endereço</Link>
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


            </div>
    
    
            <Rodape/>
    
        </div>
    
    
    
    
    )
}

