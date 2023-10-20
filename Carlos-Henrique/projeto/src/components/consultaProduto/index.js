import { Link } from 'react-router-dom';
import './index.scss';

export default function cardProduto(props){

    return(

        <div className='card-produto'>

            <div className='infs1'>

                <img src={`http://localhost:5000/${props.Capa}`}/>

                <div className='container-infs1'>

                    <h5>{props.Nome}</h5>
                    <p>ID:{props.ID}</p>
                </div>

                <hr/>
            </div>

            <div className='infs2'>

                <div className='container-infs2'>

                    <p> <span>Categoria:</span> {props.Categoria}</p>
                    <p> <span>Animal:</span> {props.Animal}</p>
                </div>

                <hr/>
            </div>

            <div className='infs3'>

                <div className='container-infs3'>
 
                    <p> <span>Preço:</span> {props.Preço}R$</p>

                </div>

                <hr/>
            </div>

            <div className='infs4'>

                <div className='container-infs4'>

                    <p> <span>Disponível:</span> {props.Disponível===1 ? 'Sim' : 'Não'}</p>
                    <p> <span>Desconto:</span> {props.Desconto+'%'}</p>
                </div>
            </div>

            <div className='infs5'>

                <div className='container-infs5'>
                    
                    <p> <span>Quantidade de Vendas:</span> {props.Vendas}</p>
                    <p> <span>Quantidade em Estoque:</span> {props.Estoque}</p>
                </div>

                <hr/>
            </div>

            <div className='infs6'>

                <p> <span>Data de Lançamento:</span> {props.Lançamento.substr(0, 10)}</p>

                <hr/>
            </div>

            <div className='infs7'>

                <div className='container-infs7'>

                    <p> <span>Avaliação:</span> {props.Avaliação}</p>

                    <p> <span>Favoritos:</span> {props.Favoritos}</p>
                </div>

                <hr/>
            </div>

            <div className='infs8'>

                <p> <span>Cadastrado por:</span> {props.Adm}</p>
            </div>

            <Link>Ver Produto</Link>
        </div>
    );
}