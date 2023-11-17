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
                    <Link to='../../perfil/informacoes-de-endereco' className='link'>Informações de Endereco</Link>
                    <Link className='link-p'>Favoritos</Link>
                    <Link to="../../perfil/pedidos" className='link'>Meus Pedidos</Link>
                    <Link className='link'> Trocar de Conta</Link>
                    <Link className='link'>Sair</Link>
                </div>


                <div className='conteiner-lf'>

                    <div className='lista-fav'>

                        <h4>Seus Favoritos</h4>
                        <hr/>
                        

                        <div className='favoritos'>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Descrição</th>
                                        <th>Valor</th>
                                        <th>Estoque</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td> <img></img></td>
                                        <td>Petisco sem glútem abóbora  e côco 150g</td>
                                        <td>R$17,90</td>
                                        <td>40</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                     {/* <div className='fav-vazio'>

                        <div className='vaz-text'>

                            <h4>Sua lista está vazia</h4>
                            <hr/>
                            <h4>Procure algo para adicionar</h4>
                            <button>Ir para loja</button>


                        </div>

                    </div> */}

                    



                </div>
                    
                </div>





            </div>


            <Rodape/>
        
            
        </div>
    )

           
    
}