import './index.scss';
import {useNavigate}   from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import CabecalhoAdm from '../../components/cabecalho-adm';
import SectionDecoration from '../../components/section-decoration';
import { useRef, useState } from 'react';
import storage from 'local-storage'

export default function LoginAdm (){
  const[usuario, setUsuario] = useState('');
  const[senhaAdm, setSenhaAdm] = useState('');
  const[erro, setErro] = useState ('');
  const[carregando, setCarregando] = useState(false)


  const navigate = useNavigate();
  const ref = useRef();


  async function entrarClick(){
    ref.current.continuosStart();
    setCarregando(true)
  

    try{ 
      const r = await LoginAdm(usuario, senhaAdm);
      console.log(r) 
     //storage('usuario-logado', r);

      setTimeout(() => {
          navigate('/adm/cadastrar-produto');
      }, 3000);
      
 
        } catch (err) {
          ref.current.complete();
          setCarregando(false);

              if(err.response.status ===  401) {
                setErro(err.response.data.erro);
              }
        } 
}
    return (
      <div className="pagina-login-adm">
        <LoadingBar color='#f11946' ref={ref} />
        
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
            <button className="botao" onClick={entrarClick} disabled={carregando}>Entrar</button>          
            </div>
            <div className='form-entrar-invalido'>
          <span> {erro} </span>

          </div>
          </div>
          
          <div id='alinhar-between'></div>
        </section>  
        </div>
  
      </div>
    )
    };

  