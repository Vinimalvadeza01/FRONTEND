import Cabecalho from '../../components/cabecalho';
import './index.scss';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import axios from 'axios';

export default function Endereco() {
  const [cep, setCEP] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [completo, setCompleto] = useState('');

  async function listarEstados(){

    try{
        const url='https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

        let resp=await axios.get(url);

        setEstado(resp.data);
    }

    catch(err){

        alert('Ocorreu um erro ao listar os estados e as cidades, estes filtros não estarão funcionando');
    }
}

async function listarCidades(){

    try{

        const url='https//servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios?orderBy=nome;

        let resp=await axios.get(url);

        setCidade(resp.data);
    }

    catch(err){

        alert('Não foi possível listar as cidades');
    }
} 
  }

  async function cadastrarEndereco() {
    const dadosEndereco = {
      cep,
      rua,
      bairro,
      cidade,
      estado,
      numero,
      completo,
    };

    try {
      const response = await axios.post('urldaapinossa', dadosEndereco);

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




  return (
    <section className='Page-Endereco'>
      <Cabecalho />
      <div className='conteudo'>
        <h1 className='titulo'>Informações de Endereço</h1>

        <div className='invisivel'>
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
          
          <div className='button'>
            <button className='bot' onClick={cadastrarEndereco}>
              Confirmar
            </button>
        </div>
        </div>
      </div>
    </section>
  );
}