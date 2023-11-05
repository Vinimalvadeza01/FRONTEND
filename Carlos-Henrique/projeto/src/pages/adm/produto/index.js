import './index.scss';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import InputMask from 'react-input-mask';

export default function PageProdutoAdm(){

    const[infsProduto,setInfsProduto]=useState({});

    const[imagesProduto,setImagesProduto]=useState([]);
    const[imagePrincipal,setImagePrincipal]=useState('');

    // Variáveis que guardam informações que podem ser alteradas, com exceção da variável "cadastro"
    const[nome,setNome]=useState('');
    const[descricao,setDescricao]=useState('');
    const[categoria,setCategoria]=useState('');
    const[animal,setAnimal]=useState('');
    const[lancamento,setLancamento]=useState('');
    const[cadastro,setCadastro]=useState('');
    const[disponivel,setDisponivel]=useState(Boolean);
    const[preco,setPreco]=useState('');
    const[precoComDesconto,setPrecoComDesconto]=useState('');
    const[desconto,setDesconto]=useState('');
    const[estoque,setEstoque]=useState('');

    const[alterarProduto,setAlterarProduto]=useState(true);
    const[corInputs,setCorInputs]=useState('transparent');
    const[borderInputs,setBorderInputs]=useState('none');

    const {id}=useParams();

    async function consultarInfsProduto(){

        const url=`http://localhost:5000/produto/adm/consulta/${id}`;

        const resp=await axios.get(url);

        setInfsProduto(resp.data);

        setNome(resp.data.Nome);
        setDescricao(resp.data.Descrição);
        setCategoria(resp.data.Categoria);
        setAnimal(resp.data.Animal);
        setDisponivel(resp.data.Disponível);
        setDesconto(resp.data.Desconto);
        setEstoque(resp.data.Estoque);

        // Formatando as datas para que seja melhor legível para o usuário
        let formatarDataCadastro=resp.data.Cadastro.substr(0,10).split('-');
        let formatarDataLançamento=resp.data.Lançamento.substr(0,10).split('-');

        const ano1=formatarDataCadastro[0];
        const ano2=formatarDataLançamento[0];

        const mes1=formatarDataCadastro[1];
        const mes2=formatarDataLançamento[1];

        const dia1=formatarDataCadastro[2];
        const dia2=formatarDataLançamento[2];

        setCadastro(`${dia1}/${mes1}/${ano1}`);
        setLancamento(`${dia2}/${mes2}/${ano2}`);

        // Formatar o preço
        const formatarPreco=resp.data.Preço.toString().replace('.', ',')+'R$';
        setPreco(formatarPreco);

        // Preço com desconto
        const calcDesconto=resp.data.Preço*(1+(resp.data.Desconto/100));
        let formatarPrecoDesconto=calcDesconto.toString();
        formatarPrecoDesconto=formatarPrecoDesconto.replace('.', ',');

        setPrecoComDesconto(formatarPrecoDesconto+'R$');
    }

    async function consultarImagensProduto(){

        const url=`http://localhost:5000/imagem/consulta/${id}`;

        const resp=await axios.get(url);

        setImagesProduto(resp.data);
        if(resp.data.length > 0 && resp.data[0].Imagem) {
            setImagePrincipal(resp.data[0].Imagem);
        }
    }

    function cancelarAlteracao(){

        setAlterarProduto(true); 
        setCorInputs('transparent'); 
        setBorderInputs('none');

        setNome(infsProduto.Nome);
        setDescricao(infsProduto.Descrição);
        setCategoria(infsProduto.Categoria);
        setAnimal(infsProduto.Animal);
        setDisponivel(infsProduto.Disponível);
        setDesconto(infsProduto.Desconto);
        setEstoque(infsProduto.Estoque);

        let formatarDataCadastro=infsProduto.Cadastro.substr(0,10).split('-');
        let formatarDataLançamento=infsProduto.Lançamento.substr(0,10).split('-');

        const ano1=formatarDataCadastro[0];
        const ano2=formatarDataLançamento[0];

        const mes1=formatarDataCadastro[1];
        const mes2=formatarDataLançamento[1];

        const dia1=formatarDataCadastro[2];
        const dia2=formatarDataLançamento[2];

        setCadastro(`${dia1}/${mes1}/${ano1}`);
        setLancamento(`${dia2}/${mes2}/${ano2}`);

        const formatarPreco=infsProduto.Preço.toString().replace('.', ',')+'R$';
        setPreco(formatarPreco);
    }

    useEffect(() => {

        consultarInfsProduto();
        consultarImagensProduto();
    },[]);

    return(
        
        <div className='page-produto-adm'>

            <CabecalhoAdm/>

            <div className='container-page'>

                <div className='container-imagens'>

                    <div className='imagens-secundarias'>

                        {imagesProduto.slice(1,imagesProduto.length).map(item=><div> <h1>Testando</h1></div>)}
                    </div>

                    <div className='imagem-principal'>
                        <div>
                            <img src={`http://localhost:5000/${imagePrincipal}`} alt='imagem não encontrada'/>
                        </div>
                    </div>

                    <button>Alterar Imagem Principal</button>
                    <button>Adicionar Imagem Secundária</button>
                    <button>Excluir Imagem Secundária</button>
                </div>

                <div className='container-infs'>

                    <div className='infs-nao-alteraveis'>

                        <h3>Informações Estáticas</h3>

                        <div> 
                            <label>ID:</label> 
                            <input type='text' value={infsProduto.ID} readOnly/>
                        </div>

                        <div> 
                            <label>Cadastrado por:</label> 
                            <input type='text' value={infsProduto.Adm} readOnly/>
                        </div>

                        <div> 
                            <label>Data de Cadastro:</label> 
                            <InputMask type='text' value={cadastro} readOnly/>
                        </div>

                        <div> 
                            <label>Vendas:</label> 
                            <input type='text' value={infsProduto.Vendas} readOnly/>
                        </div>
                        
                        <div> 
                            <label>Avaliação:</label> 
                            <input type='text' value={infsProduto.Avaliação} readOnly/>
                        </div>

                        <div> 
                            <label>Quantidade de Avaliações:</label> 
                            <input type='text' value={infsProduto.Avaliações} readOnly/>
                        </div>

                        <div> 
                            <label>Quantidade de Favoritos:</label> 
                            <input type='text' value={infsProduto.Favoritos} readOnly/>
                        </div>

                        <hr/>
                    </div>

                    <div className='infs'>

                        <h3>Informações do Produto</h3>

                        <div> 
                            <label>Nome:</label> 
                            <input  type='text' value={nome} readOnly={alterarProduto} 
                                    onChange={(e) => {setNome(e.target.value)}}
                                    style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div id='div-desc'>
                            <label>Descrição:</label>
                            <textarea   value={descricao} readOnly={alterarProduto} 
                                        wrap='hard' cols="30" rows="8" maxLength='176' 
                                        onChange={(e) => {setDescricao(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>
                        <div>
                            <label>Categoria:</label>
                            {alterarProduto ? <input type='text' value={categoria} readOnly className='sem-fundo'/>
                            : <select   onChange={(e) => {setCategoria(e.target.value)}} 
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}></select>}

                        </div>

                        <div>
                            <label>Animal:</label>
                            {alterarProduto ? <input type='text' value={animal} readOnly className='sem-fundo'/>
                            : <select 
                                        onChange={(e) => {setAnimal(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}></select>}
                        </div>

                        <div> 
                            <label>{infsProduto.Disponível ? 'Data em que foi lançado:' : 'Data prevista para lançamento:'}</label> 
                            <InputMask  mask='99/99/9999' maskChar=' ' 
                                        type='text' value={lancamento} readOnly={alterarProduto}
                                        onChange={(e) => {setLancamento(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div> 
                            <label>Disponível:</label> 
                            <input type='text' value={disponivel ? 'Sim' : 'Não'} readOnly className='sem-fundo'/>
                            {alterarProduto ? '' : <button>{infsProduto.Disponível ? 'Deixar indisponível' : 'Deixar disponível'}</button>}
                        </div>

                        <div> 
                            <label>Preço:</label> 
                            <input  type='text' value={preco} readOnly={alterarProduto}
                                    onChange={(e) => {setPreco(e.target.value)}}
                                    style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div> 
                            <label>Desconto:</label> 
                            <InputMask  mask='99%' maskChar=' ' type='text' value={desconto} readOnly={alterarProduto}
                                        onChange={(e) => {setDesconto(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div> 
                            <label>Preço com desconto:</label> 
                            <input type='text' value={precoComDesconto} readOnly className='sem-fundo'/>
                        </div>

                        <div> 
                            <label>Estoque:</label> 
                            <input  type='text' value={estoque} readOnly={alterarProduto}
                                    onChange={(e) => {setEstoque(e.target.value)}}
                                    style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <button>ATIVAR DESCONTO</button>
                    </div>
                </div>
            </div>

            <hr/>

            <div className='acoes'>

                <h3>Ações</h3>

                <div className='container-buttons'>

                    {alterarProduto ? 
                        <div className='botoes1'>
                            <button className='botao-alterar' onClick={() => {setAlterarProduto(false); setCorInputs('#E1FFA1'); setBorderInputs('1px solid #3D5745');}}>ALTERAR INFORMAÇÕES</button>
                            <button className='botao-excluir'>EXCLUIR PRODUTO</button>
                        </div>

                    :   
                        <div className='botoes2'>
                            <button onClick={cancelarAlteracao}>CANCELAR</button>
                            <button>FINALIZAR ALTERAÇÕES</button>
                        </div>
                        }
                </div>
            </div>
        </div>
    );
}