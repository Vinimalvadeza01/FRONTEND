import './index.scss';

export default function cardProduto(props){

    return(

        <div className='card-produto'>

            <div className='infs1'>

                <img src=''/>

                <div className='container-infs1'>

                    <h5>{props.item.Nome}</h5>
                    <p>ID:{props.item.ID}</p>
                </div>

                <hr/>
            </div>

            <div className='infs2'>

                <div className='container-infs2'>

                    <p> <span>Categoria:</span> {props.item.Categoria}</p>
                </div>

                <hr/>
            </div>

            <div className='infs2'>

                <p> <span> </span> {props.item.Preço}</p>
            </div>
        </div>
    );
}