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
                        <input className="input1" type="text" placeholder="Digite seu nome completo"/>
                    </div>  

                    <div className="e-mail">
                        <label className="email">E-mail</label>
                        <input className="input2" type="text" placeholder="Digite e-mail ou número de celular com DDD"/>
                    </div>  
                    
                    <div className="Senha">
                        <label className="snh">Senha</label>
                        <input className="input3" type="text" placeholder="Digite sua senha"/> 
                    </div>  
                    
                    <div className="CPF">
                        <label className="cpf">CPF</label>
                        <input className="input4" type="text" placeholder="Digite seu CPF"/>
                    </div>  
                    
                    <div className="DatadeNascimento">
                        <label className="DataCadastro">Data de Nascimento</label>
                        <input className="input5" type="text" placeholder="AAAA/MM/DD"/>
                    </div>  
                    

                    <button className="botao">Confirmar</button>
            </div>
            
        </section>
    )
}

export default Cadastro;