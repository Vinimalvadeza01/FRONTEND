import './index.scss';
import CabecalhoAdm from '../../../components/cabecalho-adm';

export default function pageConsultaAdm(){

    return(

        <div className='page-consulta-adm'>

            <CabecalhoAdm/>

            <section className='section-produtos'>

                <form className='filtros'>

                    <h3>Filtros</h3>

                    <div className='filtros-gerais'>

                        <h4>Filtros Gerais</h4>

                        <input type='checkbox'/>
                    </div>

                    <div className='filtros-estoque'>

                        <h4>Filtros de Estoque</h4>
                    </div>

                    <div className='filtros-data'>

                        <h4>Filtros por data</h4>
                    </div>

                    <div className='filtros-selects'>

                        <h4>Filtros específicos</h4>
                    </div>
                </form>

                <table className='listagem-produtos'></table>
            </section>

            <section className='section-clientes'></section>

            <section className='section-pedidos'></section>
        </div>
    );
}