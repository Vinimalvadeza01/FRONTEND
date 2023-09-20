import './index.scss';
import Cabecalho from '../../components/cabecalho';


function Cadastro(){

    return(
        <section className='Page-Cadastro'>
            <Cabecalho/>
            <div className='Conteudo'>
                    <h1>CRIAR SUA CONTA</h1>
                    <div className="Nome">
                        <label className="nm">Nome Completo</label>
                    </div>  
                    <div>
                    <input className="input1" type="text" placeholder="Digite seu nome completo"></input>          
                    </div>
                    <div className="e-mail">
                        <label className="email">E-mail</label>
                    </div>  
                    <div>
                    <input className="input2" type="text" placeholder="Digite seu nome completo"></input>          
                    </div>
                    <div className="Senha">
                        <label className="snh">Nome Completo</label>
                    </div>  
                    <div>
                    <input className="input3" type="text" placeholder="Digite seu nome completo"></input>          
                    </div>
                    <div className="CPF">
                        <label className="cpf">Nome Completo</label>
                    </div>  
                    <div>
                    <input className="input4" type="text" placeholder="Digite seu nome completo"></input>          
                    </div>
                    <div className="DatadenAscimento">
                        <label className="fata">Nome Completo</label>
                    </div>  
                    <div >
                    <input className="input5" type="text" placeholder="Digite seu nome completo"></input>          
                    </div>
            </div>
        </section>
    )
}

export default Cadastro;