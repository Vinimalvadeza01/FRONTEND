import { Link } from 'react-router-dom';
import './index.scss';

export default function SelectionConsulta(props){

    return(

        <section className='section-selecionar-consulta'>

            <div className='conteudo'>

                <div className='consulta-feita'>

                    <h3>Você está consultando:</h3>
                    <h2>{props.tipoConsulta}</h2>
                </div>

                <div className='outras-consultas'>

                    <h3>Outras consultas:</h3>

                    <div className='container-outras-consultas'>

                        <Link className='Link link-consulta' to={'/adm/consulta/'+props.consulta1}>Consultar {props.consulta1}</Link>
                        <Link className='Link link-consulta' to={'/adm/consulta/'+props.consulta2}>Consultar {props.consulta2}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}