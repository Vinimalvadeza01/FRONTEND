import './index.scss';
import SectionDecoration from '../../components/section-decoration';
import Cabecalho from '../../components/cabecalho';
import Endereco from '../endereco/inex';
import { useState } from 'react';



export default function ConfirmarEnd() {


    const [IrParaEndereco, setIrParaEndereco] = useState('');
    const [VoltaPagina, setVoltaPagina] = useState('');


    


  return (
    <div className='Page-Toda'>
        <Cabecalho/>
      <section className='Conteudo'>
        <div className='invisivel'>
            <SectionDecoration/>
          < div className='bloco'>
            <h1 className='titulo'>DESEJA NOS INFORMAR SEU ENDEREÇO?</h1>
            <p className='aviso'>Estas informações são necessárias para realizar uma entrega. Saiba mais em <br/> Entrega e devolução</p>

            <div className='botoes'>
              <div className='botao01'>
                <button onClick={() =>{setIrParaEndereco}} className='conf'>CONFIRMAR</button>
              </div>
              <div className='botao02'>
                <button onClick={() =>{setVoltaPagina}} className='depois'>ADICIONÁ-LAS <br/> MAIS TARDE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}