import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import SectionDecoration from '../../../components/section-decoration'
import InputMask from 'react-input-mask';

export default function endereco() {

    return( 

        <div className='pag-endereco'>

        <Cabecalho/>

        <div className='endereco-conteiner'>
            <SectionDecoration/>

            <div className='endereco-altmenu'>

                <div className='endereco-menu'>

                    <Link to="../../perfil" className='link'>Informações de Usuário</Link>
                    <Link className='link-p'>Informações de Endereco</Link>
                    <Link to="../../perfil/favoritos" className='link'>Favoritos</Link>
                    <Link className='link'>Meus Pedidos</Link>
                    <Link className='link'> Trocar de Conta</Link>
                    <Link className='link'>Sair</Link>

                </div>

                <hr/>

                <div className='endereco-alterar'>
                    <h5>Deseja alterar alguma informação ?</h5>
                    <button>ALTERAR</button>
                </div>



            </div>

            <div className='endereco-infos'>

               

                    <label>CEP</label>
                        <InputMask
                        mask='99999-999'
                        maskChar=''
                        placeholder="99999-999"
                        type='text'

                        />

                    <label>Rua</label>
                    <InputMask
                    mask=''
                    maskChar=''
                    placeholder="Informe sua rua"
                    type='text'

                    />    

                    <label>Bairro</label>
                    <InputMask
                    mask=''
                    maskChar=''
                    placeholder="Informe seu bairro"
                    type='text'

                    />    

                    
                    <div className='endereco-complementos'>

                        <div className='numero'>

                      <label>Nº</label>
                        <InputMask
                        mask=''
                        maskChar=''
                        placeholder="número da casa"
                        type='text'

                        />    


                        </div>

                        <div className='complemento'>
                        
                        <label>Complemento</label>
                        <InputMask
                        mask=''
                        maskChar=''
                        placeholder="Informações extras"
                        type='text'

                        />    

                        </div>

                    </div>

                    <div className='endereco-ec'>

                    <div className='estado'>

                        <label>Estado</label>
                        
                            <InputMask
                            mask=''
                            maskChar=''
                            placeholder="Nome do estado"
                            type='text'

                            />    

                    </div>


                    <div className='cidade'>

                        <label>Cidade</label>
                        
                            <InputMask
                            mask=''
                            maskChar=''
                            placeholder="Nome da cidade"
                            type='text'

                            />    

                    </div>

                    
                  

                    </div>

                    <div className='butt'>

                    <button>Confirmar</button>

                    </div>
                    

                

            </div>
        


        </div>

        <Rodape/>

        

        </div>

        
    )
    
}