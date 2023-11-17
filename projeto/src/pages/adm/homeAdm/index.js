import './index.scss';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import SectionDecoration from '../../../components/section-decoration';
import{Link} from 'react-router-dom';
import storage from 'local-storage';

export default function HomeAdm(){

    return(

        <div className='page-home-adm'>

            <CabecalhoAdm/>

            <div className='div-selecionar'>

                <SectionDecoration/>

                <h1>Bem vindo {storage('adm-logado').data.Adm}</h1>

                <h2>O que deseja fazer ?</h2>

                <div className='div-buttons'>
                    <Link className='Link redirecionar-home-adm' to='/adm/cadastrar-produto'>Cadastrar Produto</Link>
                    <Link className='Link redirecionar-home-adm' to='/adm/consulta/produtos'>Consultar Produtos</Link>
                    <Link className='Link redirecionar-home-adm' to='/adm/consulta/clientes'>Consultar Clientes</Link>
                </div>
            </div>

            <div className='infs-totais'></div>

            <div className='grafico'></div>
        </div>
    );
}