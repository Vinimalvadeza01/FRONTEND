import './index.scss';
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import InputMask from 'react-input-mask';
 
export default function(){



    return(
<section className='Page-Pagamento'>
        <Cabecalho/>
        <section  className='Conteudo-Pagamento'>
            <div className='icones-Pagamento'>
                <div className='icon1'>
                <img className='ico1' src='/assets/images/cartao-Icone-Primeiro.png' alt='cartaoUm'/>
                </div>
                <div className='icon2'>
                <img  classNameico2src='/assets/images/resumopedido.png'/>
                </div>
                <div className='icon3'>
                <img className='ico3' src='/assets/images/cartao-verficado.png'/>
                </div>
            </div>
            <div className='Forma-Pagamento'>
                <div className='cont'>
                    <h1>Escolha uma forma de pagamento</h1>
                </div>
                <div className='escolha-pagamento'>

                </div>
                <div className='dados-Cartao'>
                       <div className='nome-cartao'>
                       <label className='nm-card'>Nome do Cartao</label>
                       <InputMask
                        type='text'
                        mask=''
                        className='titular-nome'
                        placeholder='Dgite o nome do titular do cartao'
                        maskChar=''
                       />
                       </div>
                       <div className='Numero-cartao'>
                       <label className='num-card'> N° do cartão</label>
                       <InputMask
                       type='Number'
                       mask=''
                       className='number-cartao'
                       placeholder='Digite o numero do seu cartão'/>
                       </div>
                       <div className='Validade'>
                       <label className='Valid-cartao'> Validade</label>
                       <InputMask
                       type='Number'
                       mask=''
                       maskChar=''
                       placeholder='MM/AA'
                       className='data-validae'
                       />
                       </div>
                       <div className='CVV'>
                       <label className='verificacao-cartao'>cvv</label>
                       <InputMask
                       className='codigo-cartao'
                       mask=''
                       maskChar=''
                       placeholder='CVV'
                       type='Number'
                       />
                       </div>
                </div>
            </div>
            <div className='Botao'></div>
        </section>
        <Rodape/>
</section>
    )
}

