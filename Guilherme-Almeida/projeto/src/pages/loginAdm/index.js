import './index.scss';
import CabecalhoAdm from '../../components/cabecalho-adm';
import SectionDecoration from '../../components/section-decoration';


function App() {
    return (
      <div className="pagina-login-adm">
        
        <CabecalhoAdm/>
        
        <section className='Conteudo'>

          <SectionDecoration/>

          <div className='infs'>


            <div className="patas">
      
            </div>
                <h1>VegLogin</h1>
                
            <div className="nome">

              <label>Nome de Administrador</label>
              <input type="text" placeholder="Digite o nome de Administrador"></input>          
            </div>  

            
            <div className="senhaAdm">
          
          <label>Senha</label>
            <input type="password" placeholder="Digite a senha"></input>          
            </div>
            <div> 
            <button className="botao">Entrar</button>          
            </div>
          </div>

          <div></div>
        </section>  
       <div className="Rotape"></div>
  
      </div>
    );
  }
  
  export default App;
  