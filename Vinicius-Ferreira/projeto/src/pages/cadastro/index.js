import './index.scss';
import Cabecalho from '../../components/cabecalho';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [Nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [datanasc, setDatanasc] = useState('');
  const [erro, setErro] = useState('')
  const navigate = useNavigate()
  const [cep, setCEP] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [completo, setCompleto] = useState('');


  async function entrarClick() {
    try {
      let response = await axios.post('http://localhost:5000/cliente', {
        nome: Nome,
        email: email,
        senha: senha,
        cpf: cpf,
        datanasc: datanasc,
      });

      if (response.status === 200) {
        // Se o cadastro for bem-sucedido, navegue para a próxima página
        navigate('./', { state: { idCliente: response.data.idCliente } });
      }
    } catch (error) {
      console.error('Erro ao cadastrar o usuário', error);
      setErro('Falha ao cadastrar o usuário');
    }
  }
  async function cadastrarEndereco() {
    
    try {

      let dadosEndereco = ('http://localhost:5000/Endereco',{
        cep,
        rua,
        bairro,
        cidade,
        estado,
        numero,
        completo,
      });
      
      const response = await axios.post('http://localhost:5000/Endereco', dadosEndereco);
      
    
      if (response.status === 200) {
        alert('Endereço cadastrado com sucesso');
        // Limpar os campos de entrada ou redirecionar para outra página
      } else {
        alert('Falha ao cadastrar o endereço');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o endereço', error);
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
                        <input className="input3" type="text" placeholder="Digite sua senha" value={senha} onChange={e =>setSenha (e.target.value)}/> 
                    </div>  
                    
                    <div className="CPF">
                        <label className="cpf">CPF</label>
                        <InputMask className="input4" type="text" placeholder="Digite seu CPF"  mask="999.999.999-99"  Placeholder="999.999.99-99" 
                        value={cpf} onChange={e =>setCpf (e.target.value)}/>
                    </div>  
                    
                    


               
                    <div className='inputum'>
            <label className='cep'>CEP</label>
            <InputMask
              className='incep'
              mask='99999-999'
              value={cep}
              onChange={(e) => setCEP(e.target.value)}
              maskChar=''
              placeholder='99999-999'
              type='text'
            />
          </div>

          <div className='inputdois'>
            <label className='Rua'>Rua</label>
            <InputMask
              mask=''
              className='rua'
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              maskChar=''
              placeholder='Informe sua rua'
              type='text'
            />
          </div>

          <div className='inputtres'>
            <label className='Bairro'>Bairro</label>
            <InputMask
              mask=''
              className='bairro'
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              maskChar=''
              placeholder='Informe seu bairro'
              type='text'
            />
          </div>

          

          <section className='complementos'>
            <section className='endereco-ec'>
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

              <div className='input01'>
                <label className='estado'>Estado</label>
                <InputMask
                  mask=''
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  className='est'
                  maskChar=''
                  placeholder='Nome do estado'
                  type='text'
                />
              </div>
              <div className='input02'>
                <label className='numero'>Numero</label>
                <InputMask
                mask=''
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className='nm'
                maskChar=''
                placeholder='N°'
                type='Number'
              />
              </div>
            </section>
            <div className='endereco-nc'>
                <div className='input03'>
                    <label className='cidade'>Cidade</label>
                    <InputMask
                  mask=''
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className='cd'
                  maskChar=''
                  placeholder='Nome da cidade'
                  type='text'
                />
                </div>
                <div className='input04'>
                    <label className='complement'>Complemento</label>
                    <InputMask
                  mask=''
                  value={completo}
                  onChange={(e) => setCompleto(e.target.value)}
                  className='cmp'
                  maskChar=''
                  placeholder='Complementos'
                  type='text'
                />
                </div>
            </div>
          </section>

                        <div className='inv'>
                    <div className='bt'>
                    <button className="botao" onClick={entrarClick}>Confirmar</button>
                    </div>
                   
                    <p id='mensagem-erro'>
                        {erro}
                    </p>
                    </div>
                   
            </div>
       
            
        </section>
    )
}

export default Cadastro;