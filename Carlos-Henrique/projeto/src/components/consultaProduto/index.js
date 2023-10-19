import { Link } from 'react-router-dom';
import './index.scss';

export default function cardProduto(props){

    return(

        <div className='card-produto'>

            <div className='infs1'>

                <img src=''/>

                <div className='container-infs1'>

                    <img src={props.item.Capa} />
                    <h5>{props.item.Nome}</h5>
                    <p>ID:{props.item.Id}</p>
                </div>

                <hr/>
            </div>

            <div className='infs2'>

                <div className='container-infs2'>

                    <p> <span>Categoria:</span> {props.item.Categoria}</p>
                    <p> <span>Animal:</span> {props.item.Animal}</p>
                </div>

                <hr/>
            </div>

            <div className='infs3'>

                <div className='container-infs3'>
 
                    <p> <span>Preço:</span> {props.item.Preço}R$</p>

                </div>

                <hr/>
            </div>

            <div className='infs4'>

                <div className='container-infs4'>

                    <p> <span>Disponível:</span> {props.item.Disponível===1 ? 'Sim' : 'Não'}</p>
                    <p> <span>Desconto:</span> {props.item.Desconto+'%'}</p>
                </div>
            </div>

            <div className='infs5'>

                <div className='container-infs5'>
                    
                    <p> <span>Quantidade de Vendas:</span> {props.item.Vendas}</p>
                    <p> <span>Quantidade em Estoque:</span> {props.item.Estoque}</p>
                </div>

                <hr/>
            </div>

            <div className='infs6'>

                <p> <span>Data de Lançamento:</span> {props.item.Lançamento.substr(0, 10)}</p>

                <hr/>
            </div>

            <div className='infs7'>

                <div className='container-infs7'>

                    <p> <span>Avaliação:</span> {props.item.Avaliação}</p>

                    <p> <span>Favoritos:</span> {props.item.Favoritos}</p>
                </div>

                <hr/>
            </div>

            <div className='infs8'>

                <p> <span>Cadastrado por:</span> {props.item.Adm}</p>
            </div>

            <Link>Ver Produto</Link>
        </div>
    );
}