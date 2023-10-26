import './index.scss';

export default function CardClienteAdm(props){

    return(

        <div className='card-cliente-adm'>

            <div className='infs1'>

                <h4> <span>Nome:</span>{props.Nome}</h4>
                <h5> <span>ID:</span>{props.ID}</h5>

                <hr/>
            </div>

            <div className='infs2'>

                <p> <span>Email:</span>{props.Email}</p>
                <hr/>
            </div>

            <div className='infs3'>

                <p> <span>CPF:</span>{props.CPF}</p>
                <hr/>
            </div>

            <div className='infs4'>

                <p> <span>Data de Nascimento:</span>{props.Nascimento.substr(0,10)}</p>
                <hr/>
            </div>

            <div className='infs5'>

                <p> <span>Pedidos já feitos:</span>{props.Pedidos}</p>
                <hr/>
            </div>

            <div className='infs6'>

                <p> <span>Senha:</span>{props.Senha}</p>
                <hr/>
            </div>

            <div className='infs7'>

                <p> <span>Endereço:</span>{!props.ID_Endereco ? 'Não confirmado' : <button>Ver detalhes</button>}</p>
                <hr/>
            </div>

            <div className='infs-endereco'>

                <div className='infs1'>

                    <p> <span>CEP:</span> {props.CEP}</p>

                    <hr/>
                </div>

                <div className='infs2'></div>
                <div className='infs3'></div>
                <div className='infs4'></div>
                <div className='infs5'></div>
                <div className='infs6'></div>
                <div className='infs7'></div>
            </div>
        </div>
    );
}