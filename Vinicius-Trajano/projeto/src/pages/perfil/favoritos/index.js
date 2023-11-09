import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import SectionDecoration from '../../../components/section-decoration';

export default function favoritos(){

    return(

        <div className='pag-favoritos'>

            <Cabecalho/>

            <div className='conteiner-favoritos'>
                <SectionDecoration/>

                <div className='fav-menu'>
                    <Link to="../../perfil" className='link'>Informações de Usuário</Link>
                    <Link className='link-p'>Informações de Endereco</Link>
                    <Link className='link'>Favoritos</Link>
                    <Link className='link'>Meus Pedidos</Link>
                    <Link className='link'> Trocar de Conta</Link>
                    <Link className='link'>Sair</Link>
                </div>


                <div className='conteiner-lf'>

                    <div className='lista-fav'>

                        <h4>Seus Favoritos</h4>
                        <hr/>
                        

                        <div className='favoritos'>

                            <table>
                                <tr>
                                    <th>Produto</th>
                                    <th>Produto</th>
                                    <th>Produto</th>
                                    <th>Produto</th>
                                </tr>
                                <tr>
                                    <td>dasda</td>
                                </tr>

                            </table>

                        </div>

                    </div>
                    
                </div>






            </div>


            <Rodape/>
            
        </div>
    )
}