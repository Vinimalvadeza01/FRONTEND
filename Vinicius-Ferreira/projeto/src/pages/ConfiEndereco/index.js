import './index.scss';
import SectionDecoration from '../../components/section-decoration';
import Cabecalho from '../../components/cabecalho';



export default function ConfirmarEnd() {




    


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
              </div>
              <div className='botao02'>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}