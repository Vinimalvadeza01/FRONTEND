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
    const [erro, setErro]= useState('teste')

    const navigate = useNavigate()


    async function entrarClick(){

        try {

            if (datanasc === '') {
                setErro('A data de nascimento é obrigatória.');
                return;
            }

            const url='http://localhost:5000/cliente';

            const dataParts = datanasc.split('/'); // Divide a data em partes

            if (dataParts.length !== 3) {
                setErro('A data de nascimento deve estar no formato DD/MM/AAAA.');
                return;
            }

            const dataFormatada = dataParts[2] + '-' + dataParts[1] + '-' + dataParts[0]; // Formato "AAAA-MM-DD";
            const formatarCPF = cpf.replace(/\D/g, '');

            console.log(dataFormatada);

            let cliente={

                nome: Nome,
                email: email,
                cpf: formatarCPF,
                nasc: dataFormatada,
                senha: senha
            }

            console.log(cliente);

            let response = await axios.post(url,cliente);
        }

        catch(err){
            console.log(err);
        }
    }
  
    return(
        <section className='Page-Cadastro'>
            <Cabecalho/>
            <div className='Conteudo'>
                    <h1>CRIAR SUA CONTA</h1>
                    <div className="Nome">
                        <label className="nm">Nome Completo</label>
                        <input className="input1" type="text" placeholder="Digite seu nome completo" value={Nome} onChange={e => setNome (e.target.value)}/>
                    </div>  

                    <div className="e-mail">
                        <label className="email">E-mail</label>
                        <InputMask
                             mask="(99) 99999-9999"
                             className='input1'
                             type="text"
                             placeholder="(99) 9999-9999"
                             value={email}
                             onChange={e =>setEmail (e.target.value)}
                        />
                    </div>  
                    
                    <div className="Senha">
                        <label className="snh">Senha</label>
                        <input className="input3" type="password" placeholder="Digite sua senha" value={senha} onChange={e =>setSenha (e.target.value)}/> 
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
                    <p id='mensagem-erro'>
                        {erro}
                    </p>

                   
            </div>
            
        </section>
    )
}

export default Cadastro;