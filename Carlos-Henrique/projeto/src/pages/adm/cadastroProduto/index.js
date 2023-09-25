import './index.scss';
import Cabecalho from '../../../components/cabecalho-adm';
import { useState } from 'react';

export default function CadastrarProduto(){

    const[imagePrevia,setImagePrevia]=useState('');

    const[imageSec1,setImageSec1]=useState('');
    const[imageSec2,setImageSec2]=useState('');
    const[imageSec3,setImageSec3]=useState('');
    const[imageSec4,setImageSec4]=useState('');

    const[numeroInputImage,setNumeroInputImage]=useState(null);

    function previaImagem(e,input){

        let arquivo=e.target.files[0];
        let lerArquivo = new FileReader();

        lerArquivo.onload = () => {
            
            if(input==0){
                setImagePrevia(lerArquivo.result);
            }

            else if(input==1){

                setImageSec1(lerArquivo.result);
            }

            else if(input==2){

                setImageSec2(lerArquivo.result);
            }

            else if(input==3){

                setImageSec3(lerArquivo.result);
            }

            else if(input==4){

                setImageSec4(lerArquivo.result);
            }
        };

        lerArquivo.readAsDataURL(arquivo);
    }

    
    return(

        <div className='page-cadastrar-produto'>

            <Cabecalho/>

            <main className='infs-produto'>

                <form className='formulario-images'>

                    <label className={imagePrevia!=='' ? 'label-com-imagem image-principal' : 'image-principal'} style={{backgroundImage:`url(${imagePrevia})`}} for='input-imagem-principal' > 
                    
                        <input id='input-imagem-principal' type='file' accept='image/*' onChange={(e) => {previaImagem(e,0)}}/>

                        {!imagePrevia ? 
                            <div>
                                <h6>ADICIONAR IMAGEM PRINCIPAL</h6>
                                <svg width="118" height="99" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                </svg>
                            </div>

                        : <div></div>}

                        <div className='alterar-label-hover'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                            </svg>
                        </div>
                    </label>
                    
                    <div className='container-images-secundarias'>

                        <h3>IMAGENS SECUNDÁRIAS</h3>
                        <hr/>
                        
                        <div className='container-labels'>

                            <label className={imageSec1!=='' ? 'label-com-imagem label-secundario' : 'label-secundario'} onChange={(e) => {previaImagem(e,1)}} style={{backgroundImage:`url(${imageSec1})`}} for='input-imagem-secundaria-1'> 

                                <input id='input-imagem-secundaria-1' accept='image/*' type='file'/>
                                <svg width="68" height="49" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                </svg>

                                <div className='alterar-label-hover'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                    </svg>
                                </div>
                            </label>

                            <label className={imageSec2!=='' ? 'label-com-imagem label-secundario' : 'label-secundario'} onChange={(e) => {previaImagem(e,2)}} style={{backgroundImage:`url(${imageSec2})`}} for='input-imagem-secundaria-2'> 

                                <input id='input-imagem-secundaria-2' accept='image/*' type='file'/>
                                <svg width="68" height="49" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                </svg>

                                <div className='alterar-label-hover'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                    </svg>
                                </div>
                            </label>

                            <label className={imageSec3!=='' ? 'label-com-imagem label-secundario' : 'label-secundario'} onChange={(e) => {previaImagem(e,3)}} style={{backgroundImage:`url(${imageSec3})`}} for='input-imagem-secundaria-3'> 

                                <input id='input-imagem-secundaria-3' accept='image/*' type='file'/>
                                <svg width="68" height="49" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                </svg>

                                <div className='alterar-label-hover'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                    </svg>
                                </div>
                            </label>

                            <label className={imageSec4!=='' ? 'label-com-imagem label-secundario' : 'label-secundario'} onChange={(e) => {previaImagem(e,4)}} style={{backgroundImage:`url(${imageSec4})`}} for='input-imagem-secundaria-4'> 

                                <input id='input-imagem-secundaria-4' accept='image/*' type='file'/>
                                <svg width="68" height="49" viewBox="0 0 818 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M715.75 75.0456C729.809 75.0456 741.312 86.2593 741.312 99.9651V598.043L733.324 587.92L516.043 313.805C508.854 304.616 497.51 299.321 485.688 299.321C473.865 299.321 462.681 304.616 455.332 313.805L322.727 481.078L273.998 414.574C266.809 404.762 255.305 398.999 242.844 398.999C230.382 398.999 218.879 404.762 211.689 414.729L83.877 589.166L76.6875 598.822V598.355V99.9651C76.6875 86.2593 88.1906 75.0456 102.25 75.0456H715.75ZM102.25 0.287109C45.8527 0.287109 0 44.9864 0 99.9651V598.355C0 653.333 45.8527 698.033 102.25 698.033H715.75C772.147 698.033 818 653.333 818 598.355V99.9651C818 44.9864 772.147 0.287109 715.75 0.287109H102.25ZM230.062 299.321C240.133 299.321 250.105 297.387 259.41 293.63C268.714 289.873 277.168 284.367 284.289 277.425C291.41 270.483 297.059 262.241 300.913 253.171C304.766 244.101 306.75 234.38 306.75 224.563C306.75 214.745 304.766 205.024 300.913 195.954C297.059 186.884 291.41 178.642 284.289 171.7C277.168 164.758 268.714 159.252 259.41 155.495C250.105 151.738 240.133 149.804 230.062 149.804C219.992 149.804 210.02 151.738 200.715 155.495C191.411 159.252 182.957 164.758 175.836 171.7C168.715 178.642 163.066 186.884 159.212 195.954C155.359 205.024 153.375 214.745 153.375 224.563C153.375 234.38 155.359 244.101 159.212 253.171C163.066 262.241 168.715 270.483 175.836 277.425C182.957 284.367 191.411 289.873 200.715 293.63C210.02 297.387 219.992 299.321 230.062 299.321Z" fill="#619853"/>
                                </svg>

                                <div className='alterar-label-hover'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="#d6d6d6"/>
                                    </svg>
                                </div>
                            </label>
                        </div>
                    </div>
                </form>

                <div className='container2-infs'>

                    <form className='produto'>
                        
                        <label for='previa-id'>ID:</label>
                        <span name='previa-id'></span>

                        <label>Nome:</label>
                        <input type='text'/>
                        
                    </form>

                    <form className='informacoes'>

                        <div className='container-selects'>

                            <select>Categoria</select>
                            <select>Animal</select>
                        </div>

                        <label for='input-marca'>Marca do Produto:</label>
                        <input name='input-marca' type='text'/>

                        <label for='input-peso'>Peso do Produto:</label>
                        <input name='input-peso' type='text'/>

                        <label for='input-preco'>Preço:</label>

                        <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>

                            <input name='input-preco' type='number'/>
                            <span>R$</span>
                        </div>

                        <label for='input-estoque'>Quantidade em Estoque:</label>
                        <input name='input-estoque' type='number'/>
                    </form>

                    <div className='infs-adicionais'>

                        <form className='Selecao-disponivel'>

                            <label>Disponível?</label>

                            <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>

                                <input type='button' value='Sim'/>
                                <input type='button' value='Não'/>
                                {/* Ao clicar em não irá para a div: selecionar-data */}
                            </div>

                            
                            <div className='selecionar-data'>

                                <label>Selecione uma data para lançamento</label>
                                <input type='date'/>

                                <button>Não desejo lançar</button>
                                {/* Ao clicar nesse botão voltará para a div de cima (sim ou não) e terá o botão não selecionado com cor diferente*/}
                            </div>
                            
                        </form>
                        
                        <button>Ativar Desconto</button>
                        {/* Ao clicar nesse botão, irá aparecer essa div para adicionar desconto */}

                        <label for='input-desconto'>Digite o valor do Desconto:</label>
                        <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>

                            <input name='input-desconto' type='number'/>
                            <span>%</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}