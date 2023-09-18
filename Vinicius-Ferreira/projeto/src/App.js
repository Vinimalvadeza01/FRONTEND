import './App.scss';
import {io5IoPawSharp} from "react-icons/io5"

function App() {
  return (
    <div className="Corpo">
      <div className="Cabecalho"></div>
      <section>
      <div className="Conteudo">
        <div className="patas">
            <io5IoPawSharp/>
        </div>
            <h1>Faça seu Login</h1>
        <div className="credencial ">
          <input type="text" placeholder="cpf/email"></input>          
        </div>  
        <div className="senha">
        <input type="password" placeholder="senha"></input>          
        </div>
        <div className="suporte">
          <p>Não tem uma Conta?<a>Crie uma agora</a> <a className="esqueceu">esqueceu sua senha?</a></p>
        </div>
       
        <div>
        <button className="botao">Entrar</button>          
        </div>
        </div>
        </section>  
     <div className="Rotape"></div>

    </div>
  );
}

export default App;
