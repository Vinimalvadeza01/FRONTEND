import './index.scss';
import {io5IoPawSharp} from "react-icons/io5";
import Cabecalho from '../../components/cabecalho';

function App() {
  return (
    <div className="Corpo">
      
      <Cabecalho/>
      
      <section>
      <div className="Conteudo">
        <div className="patas">
        </div>
            <h1>FAÇA SEU LOGIN</h1>
        <div className="credencial ">
          <svg xmlns="http://www.w3.org/2000/svg"height="1.5em" viewBox="0 0 448 512"> <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          <input type="text" placeholder="Digite seu e-mail ou CPF"></input>          
        </div>  
        <div className="senha">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
        <input type="password" placeholder="Sua senha"></input>          
        </div>
        <div className="suporte">
          <p>Não tem uma Conta? <a>Crie uma agora</a> <a className="esqueceu">esqueceu sua senha?</a></p>
        </div>
       
        <div>
        <button className="botao">ENTRAR</button>          
        </div>
        </div>
        </section>  
     <div className="Rotape"></div>

    </div>
  );
}

export default App;
