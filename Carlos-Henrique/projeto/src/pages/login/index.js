import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './index.scss';
import  storage from 'local-storage'
import { useEffect, useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape'

export default function Login() { 

    const[emailCPF, setEmailCPF] = useState('');
    const[senha, setSenha] = useState('');
    const[erro, setErro] = useState('');
    const[esconderSenha, setEsconderSenha] = useState(true);

    const navigate = useNavigate();

    async function entrarClick(){

      try{ 
         const r =  await axios.post('http://localhost:5000/usuario/login', {
          
          emailCPF: emailCPF,
          senha: senha 
        });

        storage('usuario-logado',r);

        navigate('/');
      } 
       
      catch (err){  

        setErro(err.response.data.erro);
      }

    }

    useEffect(() => {

      if(storage('usuario-logado')){

        navigate('/');
      }
    },[]);

  return (
    <div className="Corpo">
      
      <Cabecalho/>
      
      <section>
      <div className="Conteudo">
        
            <h1>FAÇA SEU LOGIN</h1>
        <div className="credencial ">
          <svg xmlns="http://www.w3.org/2000/svg"height="1.5em" viewBox="0 0 448 512"> <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          <input type="text" placeholder="Digite seu e-mail ou CPF" value={emailCPF} onChange={e => setEmailCPF(e.target.value)}/>      
        </div>  
        <div className="senha">
        <svg xmlns="http://www.w3.org/2000/svg" height="  1.5em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
        <input type={esconderSenha ? 'password' : 'text'} placeholder="Sua senha" value={senha} onChange={e => setSenha(e.target.value)}></input>          
        {esconderSenha ? 
          <button onClick={() => {setEsconderSenha(false)}}>
            <svg width="25" height="23" viewBox="0 0 576 448" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M288 0C207.2 0 142.5 36.8 95.3999 80.6C48.5999 124 17.2999 176 2.4999 211.7C-0.800098 219.6 -0.800098 228.4 2.4999 236.3C17.2999 272 48.5999 324 95.3999 367.4C142.5 411.2 207.2 448 288 448C368.8 448 433.5 411.2 480.6 367.4C527.4 323.9 558.7 272 573.6 236.3C576.9 228.4 576.9 219.6 573.6 211.7C558.7 176 527.4 124 480.6 80.6C433.5 36.8 368.8 0 288 0ZM144 224C144 185.809 159.171 149.182 186.177 122.177C213.182 95.1714 249.809 80 288 80C326.191 80 362.818 95.1714 389.823 122.177C416.829 149.182 432 185.809 432 224C432 262.191 416.829 298.818 389.823 325.823C362.818 352.829 326.191 368 288 368C249.809 368 213.182 352.829 186.177 325.823C159.171 298.818 144 262.191 144 224ZM288 160C288 195.3 259.3 224 224 224C216.9 224 210.1 222.8 203.7 220.7C198.2 218.9 191.8 222.3 192 228.1C192.3 235 193.3 241.9 195.2 248.8C208.9 300 261.6 330.4 312.8 316.7C364 303 394.4 250.3 380.7 199.1C369.6 157.6 332.9 129.7 292.1 128C286.3 127.8 282.9 134.1 284.7 139.7C286.8 146.1 288 152.9 288 160Z" fill="black"/>  </svg>    
          </button>
        : <button onClick={() => {setEsconderSenha(true)}}>
          <svg width="25" height="23" viewBox="0 0 640 512" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_820_33)"> <path d="M38.8 5.09976C28.4 -3.10024 13.3 -1.20024 5.10001 9.19976C-3.09999 19.5998 -1.19999 34.6998 9.20001 42.8998L601.2 506.9C611.6 515.1 626.7 513.2 634.9 502.8C643.1 492.4 641.2 477.3 630.8 469.1L525.6 386.7C565.2 346.1 592 300.6 605.5 268.3C608.8 260.4 608.8 251.6 605.5 243.7C590.6 208 559.3 156 512.5 112.6C465.5 68.7998 400.8 31.9998 320 31.9998C251.8 31.9998 195 58.2998 150.7 92.7998L38.8 5.09976ZM223.1 149.5C248.6 126.2 282.7 112 320 112C399.5 112 464 176.5 464 256C464 280.9 457.7 304.3 446.6 324.7L408 294.5C416.4 275.2 418.6 253.1 412.8 231.2C401.7 189.7 365 161.8 324.2 160.1C318.4 159.9 315 166.2 316.8 171.8C318.9 178.2 320.1 185 320.1 192.1C320.1 202.3 317.7 211.9 313.5 220.4L223.2 149.6L223.1 149.5ZM373 389.9C356.6 396.4 338.7 400 320 400C240.5 400 176 335.5 176 256C176 249.1 176.5 242.4 177.4 235.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7C31.2 251.6 31.2 260.4 34.5 268.3C49.4 304 80.7 356 127.5 399.4C174.5 443.2 239.2 480 320 480C367.8 480 409.9 467.1 446.2 447.5L373 389.9Z" fill="black"/> </g> <defs><clipPath id="clip0_820_33"><rect width="640" height="512" fill="white"/></clipPath></defs> </svg>
</button>}
       
        </div>
        <div className="suporte">
          <p>Não tem uma Conta? <Link className='Link botao-page' to='/cadastro'>Crie uma agora</Link></p>
  
          <Link className='Link botao-page-login'> esqueceu sua senha?</Link>
        </div>
       
        <div>
        <button className="botao" onClick={entrarClick}>ENTRAR</button>          
        </div>
        <div className='form-entrar-invalido'>
          <span> {erro} </span>
        </div>
        </div>
        </section>  
          <Rodape/>
          </div>
  );

  }
