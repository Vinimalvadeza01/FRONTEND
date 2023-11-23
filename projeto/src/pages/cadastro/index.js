import './index.scss';
import Cabecalho from '../../components/cabecalho';
import InputMask from 'react-input-mask';
import { useState,useEffect } from 'react';
import axios from 'axios';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [datanasc, setDatanasc] = useState('');

  const [cep, setCEP] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [completo, setCompleto] = useState('');

  const[estados,setEstados]=useState([]);
  const[IDEstado,setIDEstado]=useState(0);
  const[cidades,setCidades]=useState([]);
  const[infsEstados,setInfsEstados]=useState({});
  const[infsCidades,setInfsCidades]=useState({});

  const navigate=useNavigate();
  const[erro, setErro]=useState('');

  async function CadastrarUsuario() {

    try {

      let formatarCPF = cpf.replace(/\./g, '');
      formatarCPF = formatarCPF.replace(/-/g, '');

      let formatarData = datanasc.split('/');
      let dataFormatada = '';

      const Ano = formatarData[2];
      const Mes = formatarData[1];
      const Dia = formatarData[0];

      if (formatarData.length !== 3) {

        throw new Error('Data Inválida');
      }

      if (Ano === '    ' || Mes === '  ' || Dia === '  ') {

        throw new Error('Data inválida');
      }

      else {

        dataFormatada = `${Ano}-${Mes}-${Dia}`;
      }

      if(estado==='todos'){

        throw new Error('Defina o estado o qual você mora!');
      }

      if(cidade==='todos'){

        throw new Error('Defina a cidade a qual você mora!');
      }

      const dadosCliente = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: formatarCPF,
        nasc: dataFormatada
      };

      const cadastroCliente = await axios.post('http://localhost:5000/cliente/Cadastro', dadosCliente);

      let formatarCEP = cep.replace(/\-/g, '');

      const dadosEndereco = {
        cliente: cadastroCliente.data.insertId,
        cep: formatarCEP,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        numero: numero,
        completo: completo
      }

      let cadastrarEndereco = await axios.post('http://localhost:5000/Endereco', dadosEndereco);

      const dadosLinkarEndereco = {

        nome: nome,
        email: email,
        cpf: formatarCPF,
        nasc: dataFormatada,
        senha: senha,
        pedidos:0,
        endereco: cadastrarEndereco.data.insertId,
        ID: cadastroCliente.data.insertId
      };
      
      await axios.put('http://localhost:5000/cliente/alterar', dadosLinkarEndereco);

      const infsLogin={
        ID:cadastroCliente.data.insertId,
        email:email,
        CPF:formatarCPF,
        senha:senha
      };

      storage('usuario-logado',infsLogin);

      navigate('/');
    }

    catch (error) {

      if (error.response) {

        setErro(error.response.data.erro);
      }

      else {

        setErro(error.message);
      }
    }
  }

  async function listarEstados(){

    try{
        const url='https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

        let resp=await axios.get(url);

        setEstados(resp.data);
    }

    catch(err){

        alert('Ocorreu um erro ao listar os estados e as cidades, estes filtros não estarão funcionando');
    }
  }

  async function listarCidades(){

    try{

      const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${IDEstado}/municipios?orderBy=nome`;

      let resp=await axios.get(url);

      setCidades(resp.data);
    }

    catch(err){

      alert('Não foi possível listar as cidades');
    }
  }

  useEffect(() => {

    if(storage('usuario-logado')){

      navigate('/');
    }

    listarEstados();
    listarCidades();
  },[IDEstado]);

  return (
    <section className='Page-Cadastro'>
      <Cabecalho />
      <section className='inv'>
        <div className='Titlt'>
          <h1 className='Titulo'>CRIAR SUA CONTA</h1>
        </div>

        <div className='Conteudo'>
          <section className='inv2'>
            <section className='Criaconta'>
              <div className="Nome">
                <label className="nm">Nome Completo</label>
                <input className="input1"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </div>

              <div className="e-mail">
                <label className="email">E-mail</label>
                <input
                  className="input2"
                  type="text"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

              </div>

              <div className="Senha">
                <label className="snh">Senha</label>
                <input className="input3"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)} />
              </div>

              <div className="CPF">
                <label className="cpf">CPF</label>
                <InputMask className="input4" type="text" placeholder="Digite seu CPF" mask="999.999.999-99" Placeholder="999.999.99-99"
                  value={cpf} onChange={e => setCpf(e.target.value)} />
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
                  onChange={e => setDatanasc(e.target.value)}
                />
              </div>
            </section>
            <section className='Endereco'>
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
              
              <div className='container-estado-cidade'>
                <div className='input01'>
                  <label className='estado'>Estado</label>
                  <select onChange={(e) => {
                          setEstado(e.target.value);
                          const estadoSelecionado = estados.find(item => item.sigla === e.target.value);
                          setIDEstado(estadoSelecionado ? estadoSelecionado.id : 0);
                      }}>

                    <option value='todos'>Selecionar</option>
                    {estados.map(item => 
                    <option value={item.sigla}>{item.sigla}</option>)}
                  </select>
                </div>

                <div className='input03'>
                  <label className='cidade'>Cidade</label>
                  <select onChange={(e) => {setCidade(e.target.value);}}>
                    <option value='todos'>Selecionar</option>
                    {cidades.map(item => 
                    <option value={item.nome}>{item.nome}</option>)}
                  </select>
                </div>
              </div>

              <div className='end-nc'>
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
          </section>

          <div className='bt'>
            <button className='botao' onClick={CadastrarUsuario}>
              Confirmar
            </button>

            <span className='mensagem-erro'>{erro}</span>
          </div>
        </div>
      </section>
    </section>
  );
}

