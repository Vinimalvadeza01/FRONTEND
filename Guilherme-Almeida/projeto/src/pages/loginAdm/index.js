import axios from 'axios'
import './index.scss';
import {useNavigate} from 'react-router-dom'
import CabecalhoAdm from '../../components/cabecalho-adm';
import SectionDecoration from '../../components/section-decoration';
import { useState } from 'react';
import  Rodape from '../../components/rodape'


export default function LoginAdm (){
  const[usuario, setUsuario] = useState('');
  const[senhaAdm, setSenhaAdm] = useState('');
  const[erro, setErro] = useState ('');

  const navigate = useNavigate ();

  async function entrarClick(){

    try{ 
      const r =  await axios.post('http://localhost:5000/adm/login', {
        usuario: usuario  ,
        senhaAdm: senhaAdm 
      });

      
      navigate('/')
    } 
     
    catch (err){  

      setErro(err.response.data.erro);
    }

}
    return (
      <div className="pagina-login-adm">
        
        <CabecalhoAdm/>
        
        <div className='container-page'>
        <section className='Conteudo'>

          <SectionDecoration/>

          <div className='infs'>


            <div className="patas">
      
            </div>
                <h1>VegLogin</h1>
                
                
            <div className="nome">              
            <label>Nome de Administrador</label>
              <input type="text" placeholder="Digite o nome de Administrador" value={usuario} onChange={e => setUsuario(e.target.value)}/>      
            </div>  

            
            <div className="senhaAdm">
          
          <label>Senha</label>
            <input type="password" placeholder="Digite a senha" value={senhaAdm} onChange={e => setSenhaAdm(e.target.value)}/>        
            </div>
            <div> 
            <button className="botao" onClick={entrarClick}>Entrar</button>          
            </div>
            <div className='form-entrar-invalido'>
          <span> {erro} </span>

          <div id='alinhar-between'></div>
          </div>
          </div>
          
        </section>  
        </div>
          <Rodape/>
      </div>
    )
    };

  