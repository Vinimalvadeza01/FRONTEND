import './index.scss';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CabecalhoAdm from '../../../components/cabecalho-adm';
import InputMask from 'react-input-mask';

export default function PageProdutoAdm(){

    const[infsProduto,setInfsProduto]=useState({});

    const[infsImagesSecundariasProduto,setInfsImagesSecundariasProduto]=useState([]);
    const[infsImagePrincipal,setInfsImagePrincipal]=useState({});

    const[categorias,setCategorias]=useState([]);
    const[animais,setAnimais]=useState([]);

    // Variáveis que guardam informações que podem ser alteradas, com exceção da variável "cadastro"
    const[nome,setNome]=useState('');
    const[marca,setMarca]=useState('');
    const[descricao,setDescricao]=useState('');
    const[peso,setPeso]=useState('');
    const[categoria,setCategoria]=useState('');
    const[animal,setAnimal]=useState('');
    const[lancamento,setLancamento]=useState('');
    const[cadastro,setCadastro]=useState('');    
    const[disponivel,setDisponivel]=useState('');
    const[precoFormatado,setPrecoFormatado]=useState('');
    const[precoInteiro,setPrecoInteiro]=useState(Number());
    const[precoCentavos,setPrecoCentavos]=useState(Number());
    const[precoComDesconto,setPrecoComDesconto]=useState('');
    const[desconto,setDesconto]=useState('');
    const[estoque,setEstoque]=useState('');

    const[produtoEmAlteracao,setProdutoEmAlteracao]=useState(true);
    const[corInputs,setCorInputs]=useState('transparent');
    const[borderInputs,setBorderInputs]=useState('none');

    // Variáveis para alterações de imagem:

    // Estado dos botões
    const[capaEmAlteracao,setCapaEmAlteracao]=useState(false);
    const[imageSecAlteracao,setImageSecAlteracao]=useState(false);
    const[imageSecDeletar,setImageSectDeletar]=useState(false);

    // Para prévias de imagem
    const[previaCapa,setPreviaCapa]=useState('');
    const[previaSec1,setPreviaSec1]=useState('');
    const[previaSec2,setPreviaSec2]=useState('');
    const[previaSec3,setPreviaSec3]=useState('');
    const[previaSec4,setPreviaSec4]=useState('');

    // Para guardar as imagens:
    const[capa,setCapa]=useState('');
    const[sec1,setSec1]=useState('');
    const[sec2,setSec2]=useState('');
    const[sec3,setSec3]=useState('');
    const[sec4,setSec4]=useState('');

    // Em caso de não haver uma imagem secundária ali e o usuário querer adicioná-la
    const[inserirSec1,setInserirSec1]=useState(false);
    const[inserirSec2,setInserirSec2]=useState(false);
    const[inserirSec3,setInserirSec3]=useState(false);
    const[inserirSec4,setInserirSec4]=useState(false);

    const[erro,setErro]=useState('');
    const[erroImagem,setErroImagem]=useState('');

    const {id}=useParams();

    async function consultarInfsProduto(){

        try{

            const url=`http://localhost:5000/produto/adm/consulta/${id}`;

            const resp=await axios.get(url);

            setInfsProduto(resp.data);

            setNome(resp.data.Nome);
            setMarca(resp.data.Marca);
            setDescricao(resp.data.Descrição);
            setPeso(resp.data.Peso);
            setCategoria(resp.data.Categoria_ID);
            setAnimal(resp.data.Animal_ID);
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
            setPrecoFormatado(formatarPreco);

            // Preço com desconto
            const calcDesconto=resp.data.Preço-(resp.data.Preço*(resp.data.Desconto/100));
            let formatarPrecoDesconto=calcDesconto.toString();
            formatarPrecoDesconto=formatarPrecoDesconto.replace('.', ',');
            formatarPrecoDesconto=formatarPrecoDesconto.slice(0,5);
            setPrecoComDesconto(formatarPrecoDesconto+'R$');

            // Para as variáveis de preço inteiro e centavos
            const dividirPreco=resp.data.Preço.split('.');

            setPrecoInteiro(dividirPreco[0]);
            setPrecoCentavos(dividirPreco[1]);
        }

        catch(err){

            alert('Ocorreu uma falha no sistema e não foi possível consultar as informações do produto\n'+err.message);
        }
    }

    async function consultarImagensProduto(){

        try{

            const urlCapa=`http://localhost:5000/imagem/consulta/capa/${id}`;
            const urlSec=`http://localhost:5000/imagem/consulta/sec/${id}`;

            const respCapa=await axios.get(urlCapa);
            const respSec=await axios.get(urlSec);

            setInfsImagePrincipal(respCapa.data);
            setInfsImagesSecundariasProduto(respSec.data); 

            setCapa(respCapa.data.Imagem);

            let contador=0;
            for(let item of respSec.data){

                if(contador===0){

                    setSec1(item.Imagem);
                }

                else if(contador===1){

                    setSec2(item.Imagem);
                    
                }

                else if(contador===2){

                    setSec3(item.Imagem);
                }

                else if(contador===3){

                    setSec4(item.Imagem);
                }

                contador=contador+1;
            }

            if(respSec.data.length<4){

                setInserirSec4(true);
            }

            if(respSec.data.length<3){

                setInserirSec3(true);
            }

            if(respSec.data.length<2){

                setInserirSec2(true);
            }

            if(respSec.data.length<1){

                setInserirSec1(true);
            }
        }

        catch(err){

            alert('Ocorreu uma falha no sistema e não foi possível listar as imagens do produto\n'+err.message);
        }
    }

    async function alterarProduto(){

        try{

            let preco=precoInteiro+'.'+precoCentavos;

            let formatarDesconto=desconto.toString().slice(0,2);
            let formatarDataLancamento=lancamento.split('/');

            if(formatarDataLancamento.length<3){

                throw new Error('Data Inválida');
            }
            const ano=formatarDataLancamento[2].replace(' ');
            const mes=formatarDataLancamento[1].replace(' ');
            const dia=formatarDataLancamento[0].replace(' ');

            if(ano===undefined || ano.length>4){

                throw new Error('Ano inválido');
            }

            if(mes===undefined || mes.length>2){

                throw new Error('Mês inválido');
            }

            if(dia===undefined|| dia.length>2){

                throw new Error('Dia inválido');
            }

            const dataFormatada=`${ano}-${mes}-${dia}`

            if(infsProduto.Disponível){

                if(dataFormatada!==infsProduto.Lançamento.substr(0,10)){

                    throw new Error('Você não pode alterar a data de lançamento com o produto disponível');
                };
            }

            let hoje=new Date();
            hoje=hoje.toISOString();

            if(dataFormatada<hoje.substr(0,10) && infsProduto.Disponível===false){

                throw new Error('A data de lançamento não pode ser uma data que já se passou');
            }

            const url=`http://localhost:5000/produto/alterar/${id}`;

            const produto={

                nome:nome,
                categoria:categoria,
                animal:animal,
                marca:marca,
                descricao:descricao,
                peso:peso,
                lancamento:dataFormatada,
                disponivel:disponivel,
                desconto:Number(formatarDesconto),
                preco:Number(preco),
                estoque:estoque
            };

            await axios.put(url,produto,id);

            window.location.reload();
        }
        
        catch(err){
            
            if(err.response){

                setErro(err.response.data.erro);
            }

            else{
                setErro(err.message);
            }
        }
    }

    async function alterarCapa(){

        try{

            if(previaCapa===''){

                throw new Error('Selecione outra capa');
            }

            const formData = new FormData();
    
            let imagemParaAlterar='';
     
            imagemParaAlterar=capa;
    
            formData.append('imagemProduto',imagemParaAlterar);
    
            const url=`http://localhost:5000/imagem/alterar/capa/${id}`;
    
            await axios.put(url, formData, {
                        
                headers:{
    
                    "Content-Type":"multipart/form-data"
                }}
            );
    
            window.location.reload();
        }

        catch(err){

            if(err.response.data.erro){

                setErroImagem(err.response.data.erro);
            }

            else{
                
                setErroImagem(err.message);
            }
        }
    }

    async function alterarImageSecundaria(){

        try{
            // Alterando as imagens já existentes
            if(inserirSec1===false && previaSec1!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec1;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.put(`http://localhost:5000/imagem/alterar/imageSec/${id}/2`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }

            if(inserirSec2===false && previaSec2!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec2;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.put(`http://localhost:5000/imagem/alterar/imageSec/${id}/3`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }

            if(inserirSec3===false && previaSec3!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec3;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.put(`http://localhost:5000/imagem/alterar/imageSec/${id}/4`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }

            if(inserirSec4===false && previaSec4!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec4;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.put(`http://localhost:5000/imagem/alterar/imageSec/${id}/5`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }
                    
            // Verificando quais imagens terão que ser inseridas, em caso de imagens secundárias não cadastradas
            if(inserirSec1 && sec1!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec1;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.post(`http://localhost:5000/imagem/${id}/2/inserir`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }

            if(inserirSec2 && sec2!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec2;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.post(`http://localhost:5000/imagem/${id}/3/inserir`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }

            if(inserirSec3 && sec3!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec3;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.post(`http://localhost:5000/imagem/${id}/4/inserir`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }

            if(inserirSec4 && sec4!==''){

                const formData = new FormData();

                let imagemParaAlterar='';
                imagemParaAlterar=sec4;

                formData.append('imagemProduto',imagemParaAlterar);

                await axios.post(`http://localhost:5000/imagem/${id}/5/inserir`, formData, {
                        
                    headers:{

                        "Content-Type":"multipart/form-data"
                    },
                });
            }

            window.location.reload();
        }

        catch(err){

            if(err.response.data.erro){

                setErroImagem(err.response.data.erro);
            }

            else{

                setErroImagem(err.message);
            }
        }
    }

    function previaImagem(e,input){

        let arquivo=e.target.files[0];
        let lerArquivo = new FileReader();
        
        lerArquivo.onload = () => {    
            if(input===0){

                setPreviaCapa(lerArquivo.result);
            }

            else if(input===1){

                setPreviaSec1(lerArquivo.result);
            }

            else if(input===2){

                setPreviaSec2(lerArquivo.result);
            }

            else if(input===3){

                setPreviaSec3(lerArquivo.result);
            }

            else if(input===4){

                setPreviaSec4(lerArquivo.result);
            }
        }

        lerArquivo.readAsDataURL(arquivo);
    }

    function cancelarAlteracao(){

        setProdutoEmAlteracao(true); 
        setCorInputs('transparent'); 
        setBorderInputs('none');

        setNome(infsProduto.Nome);
        setMarca(infsProduto.Marca);
        setDescricao(infsProduto.Descrição);
        setPeso(infsProduto.Peso);
        setCategoria(infsProduto.Categoriai_ID);
        setAnimal(infsProduto.Animal_ID);
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
        setPrecoFormatado(formatarPreco);
    }

    async function listarCategorias(){

        try{
            const url=`http://localhost:5000/categoria/listar`;

            const resp=await axios.get(url);

            setCategorias(resp.data);
        }

        catch(err){

            alert('Ocorreu um erro ao listar as categorias, não será possível fazer alterações na categoria do produto');
        }
    }

    async function listarAnimais(){

        try{

            const url='http://localhost:5000/animal/listar';

            let respAPI=await axios.get(url);

            setAnimais(respAPI.data);
        }

        catch(err){

            alert('Não foi possível listar os animais, não será possível fazer alterações no tipo de animal do produto');
        }
    }

    useEffect(() => {

        consultarInfsProduto();
        consultarImagensProduto();
        listarCategorias();
        listarAnimais();
    },[]);

    return(
        
        <div className='page-produto-adm'>

            <CabecalhoAdm/>

            <div className='container-page'>

                <div className='container-imagens'>

                    <div className='imagem-principal'>
                        
                        {capaEmAlteracao ? 
                            <label for='alterar-capa-produto' onChange={(e) => {previaImagem(e,0)}}>

                                {previaCapa!=='' ?
                                    <img src={previaCapa}/>
                                :
                                    <img src={`http://localhost:5000/${capa}`} alt='Imagem Principal' />}

                                <input id='alterar-capa-produto' type='file' accept='image/*' readOnly onChange={(e) => {setCapa(e.target.files[0])}}/>

                                <div className='alterar-label-hover'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                    </svg>
                                </div>
                            </label>
                        :
                        <div>
                            <img src={`http://localhost:5000/${capa}`} alt='imagem não encontrada'/>
                        </div>}
                    </div>

                    <div className='div-erro'>
                        <span className='mensagem-erro'>{erroImagem}</span>
                    </div>
                    
                    <hr/>

                    <div className='imagens-secundarias'>

                        <h3>{infsImagesSecundariasProduto.length===0 ? 'Este produto não possui imagens secundárias' : 'Imagens Secundárias'}</h3>

                        {imageSecAlteracao ?
                            <div className='div-labels'>
                                <label for='alterar-sec1' onChange={(e) => {previaImagem(e,1)}}>
                                    {sec1==='' ?                                 
                                        <svg width="82" height="70" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                        </svg>
                                    :
                                        previaSec1!=='' ?
                                            <img src={previaSec1} alt=''/>
                                        :
                                            <img src={`http://localhost:5000/${sec1}`} alt=''/>}
                                    
                                    <input id='alterar-sec1' type='file' accept='image/*' readOnly onChange={(e) => {setSec1(e.target.files[0])}}/>

                                    <div className='alterar-label-hover'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                        </svg>
                                    </div>
                                </label>

                                <label for='alterar-sec2' onChange={(e) => {previaImagem(e,2)}}>
                                    {sec2==='' ?                                         
                                        <svg width="82" height="70" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                        </svg>
                                    :
                                        previaSec2!=='' ?
                                            <img src={previaSec2} alt=''/>
                                        :
                                            <img src={`http://localhost:5000/${sec2}`} alt=''/>}
                                    
                                    <input id='alterar-sec2' type='file' accept='image/*' readOnly onChange={(e) => {setSec2(e.target.files[0])}}/>

                                    <div className='alterar-label-hover'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                        </svg>
                                    </div>
                                </label>

                                <label for='alterar-sec3' onChange={(e) => {previaImagem(e,3)}}>
                                    {sec3==='' ? 
                                        <svg width="82" height="70" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                        </svg>
                                    :
                                        previaSec3!=='' ?
                                            <img src={previaSec3} alt=''/>
                                        :
                                            <img src={`http://localhost:5000/${sec3}`} alt=''/>}
                                    
                                    <input id='alterar-sec3' type='file' accept='image/*' readOnly onChange={(e) => {setSec3(e.target.files[0])}}/>

                                    <div className='alterar-label-hover'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                        </svg>
                                    </div>
                                </label>

                                <label for='alterar-sec4' onChange={(e) => {previaImagem(e,4)}}>
                                    {sec4==='' ?                                         
                                        <svg width="82" height="70" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                        </svg>
                                    :
                                        previaSec4!=='' ?
                                            <img src={previaSec4} alt=''/>
                                        :
                                            <img src={`http://localhost:5000/${sec4}`} alt=''/>}
                                    
                                    <input id='alterar-sec4' type='file' accept='image/*' readOnly onChange={(e) => {setSec4(e.target.files[0])}}/>

                                    <div className='alterar-label-hover'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                        :
                            <div className='container-images-secs'>
                                {infsImagesSecundariasProduto.map(item=>
                                    <div className='div-imagem-sec'> 
                                        <img src={`http://localhost:5000/${item.Imagem}`} alt=''/>
                                    </div>)}
                            </div>}
                    </div>
 
                    {capaEmAlteracao || imageSecAlteracao || imageSecDeletar ? 
                        <div className='div-buttons'>

                            {capaEmAlteracao ?
                                <div className='buttons-alterar-capa'>
                                    <button className='button2' onClick={alterarCapa}>Escolher essa capa</button>
                                    <button className='button3' onClick={() => {setCapaEmAlteracao(false); window.location.reload();}}>Cancelar alteração</button>
                                </div>
                            : null}

                            {imageSecAlteracao ?
                                <div className='buttons-alterar-images-sec'>
                                    <button className='button2' onClick={alterarImageSecundaria}>Escolher essas imagens</button>
                                    <button className='button3' onClick={() => {setImageSecAlteracao(false); window.location.reload();}}>Cancelar alteração</button>
                                </div>
                            : null}

                            {imageSecDeletar ? 
                                <div className='buttons-deletar-images-sec'>
                                    <button className='button1'>Deletar essas imagens</button>
                                    <button className='button3' onClick={() => {setImageSectDeletar(false); window.location.reload();}}>Cancelar</button>
                                </div>
                            : null}
                        </div> 
                    :                     
                        <div className='buttons-images-acoes div-buttons'>
                            <button className='button1' onClick={() => {setCapaEmAlteracao(true)}}>Alterar Imagem Principal</button>
                            <button className='button2' onClick={() => {setImageSecAlteracao(true)}}>Adicionar/Alterar Imagem Secundária</button>
                            <button className='button3' onClick={() => {setImageSectDeletar(true)}}>Excluir Imagem Secundária</button>
                        </div>}
                </div>

                <div className='container-infs'>
                    
                    <form className='infs-nao-alteraveis'>

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
                            <label>Favoritos:</label> 
                            <input type='text' value={infsProduto.Favoritos} readOnly/>
                        </div>
                    </form>

                    <form className='infs'>

                        <h3>Informações do Produto</h3>

                        <div> 
                            <label>Nome:</label> 
                            <input  type='text' value={nome} readOnly={produtoEmAlteracao} 
                                    onChange={(e) => {setNome(e.target.value)}}
                                    style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div>
                            <label>Marca:</label>
                            <input  type='text' value={marca} readOnly={produtoEmAlteracao}
                                    onChange={(e) => {setMarca(e.target.value)}}
                                    style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div id='div-desc'>
                            <label>Descrição:</label>
                            <textarea   value={descricao} readOnly={produtoEmAlteracao} 
                                        wrap='hard' cols="30" rows="8" maxLength='176' 
                                        onChange={(e) => {setDescricao(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div>
                            <label>Peso:</label>
                            <input  type='text' value={peso} readOnly={produtoEmAlteracao} 
                                    onChange={(e) => {setPeso(e.target.value)}}
                                    style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div>
                            <label>Categoria:</label>
                            {produtoEmAlteracao ? <input type='text' value={infsProduto.Categoria} readOnly className='sem-fundo'/>
                            :   <select onChange={(e) => {setCategoria(e.target.value)}} 
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}>

                                        {categorias.map(item => 
                                            <option value={item.ID} selected={infsProduto.Categoria_ID===item.ID}>{item.Categoria}</option>)}
                                </select>}

                        </div>

                        <div>
                            <label>Animal:</label>
                            {produtoEmAlteracao ? <input type='text' value={infsProduto.Animal} readOnly className='sem-fundo'/>
                            :   <select 
                                        onChange={(e) => {setAnimal(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}>
                                
                                        {animais.map(item => 
                                                    <option value={item.ID} selected={infsProduto.Animal_ID===item.ID}>{item.Animal}</option>)}
                                </select>
                            }
                        </div>

                        <div> 
                            <label>{infsProduto.Disponível ? 'Lançado em:' : 'Prévia para lançamento:'}</label> 
                            <InputMask  mask='99/99/9999' maskChar=' ' 
                                        type='text' value={lancamento} readOnly={produtoEmAlteracao}
                                        onChange={(e) => {setLancamento(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div> 
                            <label>Disponível:</label> 
                            <input type='text' value={disponivel ? 'Sim' : 'Não'} readOnly className='sem-fundo'/>
                            {produtoEmAlteracao ? '' : <button onClick={() => { 

                                const hoje=new Date();
                                const converterData=hoje.toISOString();
                                const extrairData=converterData.split('T');
                                const formatarData=extrairData[0].split('-');  

                                const ano=formatarData[0];
                                const mes=formatarData[1];
                                const dia=formatarData[2];

                                if(infsProduto.Disponível){

                                    setDisponivel(false);
                                }

                                else{

                                    setDisponivel(true);
                                    setLancamento(`${dia}/${mes}/${ano}`);
                                }

                            }}>{infsProduto.Disponível ? 'Deixar indisponível' : 'Deixar disponível'}</button>}
                        </div>

                        <div className='div-preco'> 
                            <label>Preço:</label> 
                            {produtoEmAlteracao ? 
                                <input  value={precoFormatado} readOnly={produtoEmAlteracao}
                                        style={{background:`${corInputs}`}}/>

                            : <div>
                                <div>
                                    <input  value={precoInteiro} type='number'
                                            onChange={(e) => {
                                                setPrecoInteiro(e.target.value);                                     if(e.target.value.length>3){
                                                if(e.target.value.length>3){
                                                    setPrecoInteiro(e.target.value.slice(0,3));
                                                };
                                            }}}
                                            style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                                                                    
                                    <input  value={precoCentavos} type='number'
                                            onChange={(e) => {
                                                setPrecoCentavos(e.target.value);                                     
                                                if(e.target.value.length>2){
                                                    setPrecoCentavos(e.target.value.slice(0,2));
                                                };
                                            }}
                                            style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                                </div>
                                
                                <span>R$</span>
                              </div>
                            }
                            
                        </div>

                        <div> 
                            <label>Desconto:</label> 
                            <InputMask  mask='99%' maskChar=' ' type='text' value={desconto} readOnly={produtoEmAlteracao}
                                        onChange={(e) => {setDesconto(e.target.value)}}
                                        style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div> 
                            <label>Preço com desconto:</label> 
                            <input type='text' value={precoComDesconto} readOnly className='sem-fundo'/>
                        </div>

                        <div> 
                            <label>Estoque:</label> 
                            <input  type='text' value={estoque} readOnly={produtoEmAlteracao}
                                    onChange={(e) => {setEstoque(e.target.value)}}
                                    style={{background:`${corInputs}`, border:`${borderInputs}`}}/>
                        </div>

                        <div id='div-erro'>
                            <span className='mensagem-erro'>{erro}</span>
                        </div>
                    </form>
                </div>
            </div>

            <hr/>

            <div className='acoes'>

                <h3>Ações</h3>

                <div className='container-buttons'>

                    {produtoEmAlteracao ? 
                        <div className='botoes1'>
                            <button className='botao-alterar' onClick={() => {setProdutoEmAlteracao(false); setCorInputs('#EBFBE9'); setBorderInputs('1px solid #3D5745');}}>ALTERAR INFORMAÇÕES</button>
                            <button className='botao-excluir'>EXCLUIR PRODUTO</button>
                        </div>

                    :   
                        <div className='botoes2'>
                            <button onClick={() => {alterarProduto();}}>FINALIZAR ALTERAÇÕES</button>
                            <button onClick={cancelarAlteracao}>CANCELAR</button>
                        </div>
                        }
                </div>
            </div>
        </div>
    );
}