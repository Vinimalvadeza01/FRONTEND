import Cabecalho from '../../components/cabecalho'
import './index.scss'
import InputMask from 'react-input-mask'


export default function Endereco(){

    return(
<section className='Page-Endereco'>
<Cabecalho/>
    <div className='conteudo'>
        <h1 className='titulo'>Informações de Endereço</h1>

        <div className='invisivel'>
    
    <div className='inputum'>
            <label className='cep'>CEP</label>
            <InputMask
            className='incep'
            mask='99999-999'
            maskChar=''
            placeholder="99999-999"
            type='text'
            />
    </div>

    <div className='inputdois'>
            <label className='rua'>Rua</label>
            <InputMask
            mask=''
            maskChar=''
            placeholder="Informe sua rua"
            type='text'
            />    
    </div>
    <div className='inputtres'>
            <label className='bairro'>Bairro</label>
            <InputMask
            mask=''
            maskChar=''
            placeholder="Informe seu bairro"
            type='text'
            />    
    </div>
        
        <div className='complementos'>
            
            <div className='numero'>
            <label className='num'>Nº</label>
            <InputMask
            mask=''
            maskChar=''
            placeholder="número da casa"
            type='Number'
            />    
            </div>

            <div className='complement'>
            
            <label className='comp'>Complemento</label>
            <InputMask
            mask=''
            maskChar=''
            placeholder="Informações extras"
            type='text'
            />    
            </div>

        </div>

        <div className='endereco-ec'>

        <div className='input01'>

            <label className='estado'>Estado</label>
            
                <InputMask
                mask=''
                maskChar=''
                placeholder="Nome do estado"
                type='text'
                />    
        </div>


        <div className='input02'>

            <label className='cidade'>Cidade</label>
            
                <InputMask
                mask=''
                maskChar=''
                placeholder="Nome da cidade"
                type='text'
                />    

            </div>

            </div>

            <div className='butt'>
            <button className='bt'>Confirmar</button>
            </div>
            </div>
    </div>
 </section> 


    )
}