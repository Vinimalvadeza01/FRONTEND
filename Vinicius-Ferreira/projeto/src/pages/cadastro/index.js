import './index.scss';
import Cabecalho from '../../components/cabecalho';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Cadastro(){

    const [Nome, setNome]= useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');
    const [cpf, setCpf]= useState('');
    const [datanasc, setDatanasc]= useState('');
    const [erro, setErro]= useState('');
    const [consenha, setConsenha]= useState('');
    

 


    const navigate = useNavigate()


    async function entrarClick(){

        try{

            const Extraircpf= cpf.match(/\d+\.\d+/g);
            const Extrairdtn= datanasc.replace(/\//g, '-');

            console.log(Extrairdtn);
            let response = await axios.post ('http://localhost:5000/cliente',{ nome: Nome,
            email: email,
            senha: senha,
            cpf: Extraircpf,
            datanasc: Extrairdtn
            });

            navigate('/');
        }
        
        catch(err){

            setErro(err.response.data.erro);
        }
    }
  

    return(
        <section className='Page-Cadastro'>
            <Cabecalho/>
            <div className='Conteudo'>
                    <h1 className='Titulo'>CRIAR SUA CONTA</h1>
                    <div className="Nome">
                        <label className="nm">Nome Completo</label>
                        <input className="input1" type="text" placeholder="Digite seu nome completo" value={Nome} onChange={e => setNome (e.target.value)}/>
                    </div>  

                    <div className="e-mail">
                        <label className="email">E-mail</label>
                        <InputMask
                             mask="(99) 9999-9999"
                             className='input1'
                             type="text"
                             placeholder="(99) 9999-9999"
                             value={email}
                             onChange={e =>setEmail (e.target.value)}
                        />
                    </div>  
                    
                    <div className="Senha">
                        <label className="snh">Senha</label>
                        <input className="input3" type="password" placeholder="Digite sua senha"  value={senha} onChange={e =>setSenha (e.target.value)}/> 
                    </div>  
                    <div className="CSenha">
                        <label className="confirmar"> Confirmar a Senha</label>
                        <input className="input6" type="password" placeholder="Confirme a senha"  value={consenha} onChange={e =>setConsenha (e.target.value)}/> 
                    </div>  
                    
                    <div className="CPF">
                        <label className="cpf">CPF</label>
                        <InputMask className="input4" type="text" placeholder="Digite seu CPF"  mask="999.999.999-99"  Placeholder="999.999.99-99" 
                        value={cpf} onChange={e =>setCpf (e.target.value)}/>
                    </div>  
                    
                    <div className="DatadeNascimento">
                    <label className="DataCadastro">Data de Nascimento</label>
                    <InputMask
                        mask="99/99/9999"
                        maskChar=" "
                        placeholder="DD/MM/AAAA"
                        className='input5'
                        type='text'
                        value={datanasc} 
                        onChange={e =>setDatanasc (e.target.value)}
                    />                    
                    </div>  
                    <div>
                    <button className="botao" onClick={entrarClick}>Confirmar</button>
                    </div>
                    <div>
                        {erro}
                    </div>
            </div>
            
        </section>
    )
}

export default Cadastro;