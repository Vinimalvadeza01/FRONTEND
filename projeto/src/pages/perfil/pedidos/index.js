import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import SectionDecoration from '../../../components/section-decoration';

export default function Pedidos(){


    return(

        <div className='pag-pedidos'>
            <Cabecalho/>

            <div className='conteiner-pedidos'>
                <SectionDecoration/>

                <div className='pedidos-menu'>

                    <Link to="../../perfil" className='link'>Informações de Usuário</Link>
                        <Link to='../../perfil/informacoes-de-endereco' className='link'>Informações de Endereco</Link>
                        <Link to="../../perfil/favoritos" className='link'>Favoritos</Link>
                        <Link to="../../pedidos" className='link-p'>Meus Pedidos</Link>
                        <Link className='link'> Trocar de Conta</Link>
                        <Link className='link'>Sair</Link>

                </div>

                
            </div>
        </div>
    )
}