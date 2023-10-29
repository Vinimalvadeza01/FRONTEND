import { Link } from 'react-router-dom';
import './index.scss';
import {useState} from 'react';

export default function CardClienteAdm(props){

    const[mostrarEndereco,setMostrarEndereco]=useState(false);

    const[mostrarBotao,setMostrarBotao]=useState(true);

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

                <p> <span>Endereço:</span>{!props.Endereco ? 'Não confirmado' 
                    : mostrarBotao 
                        ?    <button onClick={() => {
                                setMostrarEndereco(true); 
                                setMostrarBotao(false)}}>Ver endereço
                            </button> 

                        :   <button onClick={() => {setMostrarEndereco(false); setMostrarBotao(true)}}>Ver menos</button>}</p>
                <hr/>
            </div>

            {mostrarEndereco && props.Endereco!==null ?
            
                <div className='infs-endereco'>

                    <div className='infs1'>

                        <p> <span>CEP:</span> {props.CEP}</p>

                        <hr/>
                    </div>

                    <div className='infs2'>

                        <p> <span>Estado:</span> {props.Estado}</p>

                        <hr/>
                    </div>
                    
                    <div className='infs3'>

                        <p> <span>Cidade:</span> {props.Cidade}</p>

                        <hr/>
                    </div>


                    <div className='infs4'>

                        <p> <span>Bairro:</span> {props.Bairro}</p>

                        <hr/>
                    </div>

                    <div className='infs5'>

                        <p> <span>Rua:</span> {props.Rua}</p>

                        <hr/>
                    </div>

                    <div className='infs6'>

                        <p> <span>Número:</span> {props.Número}</p>

                        <hr/>
                    </div>

                    <div className='infs7'>

                        <p> <span>Complemento:</span> {!props.Complemento ? 'Sem complemento': props.Complemento}</p>
                    
                        <hr/>
                    </div>

                </div>

                : ''
            }

            <div className='redirecionar-cliente'>

                <Link className='Link link-redirecionar' to={props.caminho}>Ver detalhes do cliente</Link>
            </div>
            
        </div>
    );
}