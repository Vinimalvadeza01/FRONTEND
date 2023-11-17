import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape/index.js';
import SectionDecoration from '../../components/section-decoration/index.js';
import React, { useState } from 'react';



export default function ProdutoClientes(){
    const [contador, setContador] = useState(0);


const aumentarContador = () => {
  setContador(contador + 1);
};


const diminuirContador = () => {
  setContador(contador - 1);
};

    return(
        <section className='corpo'>
            <Cabecalho/>
            <div className='conteudo'>
                
                <div className='imgs'>
                    <div className='quadrado'>

                    </div>
                    <div className='quadrado'>
                        
                    </div>
                    <div className='quadrado'>
                        
                    </div>
                    <div className='quadrado'>
                        
                    </div>

                </div>
                <img url='https://www.figma.com/file/EHFu5VH2i4ta2X8k5G3U4Y/Prot%C3%B3tipo-P%C3%A1ginas?type=design&node-id=1237-60&mode=design&t=gFJW6LGp7BO1uSAB-4' />

                <div className='nome-pedido'>
                    <label>Semente de Graminha para Gatos Zoe Pet Azevém, Aveia e Cevada 130g</label>
                    <svg width="15" height="15" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.2753 2.49387C38.5724 1.04265 37.0872 0.119141 35.4561 0.119141C33.8249 0.119141 32.3529 1.04265 31.6368 2.49387L23.1098 19.9481L4.06669 22.745C2.47534 22.9825 1.14922 24.0907 0.658552 25.6079C0.167886 27.125 0.565723 28.8006 1.70619 29.9219L15.5244 43.5238L12.2621 62.7459C11.9969 64.3291 12.66 65.9386 13.9728 66.8753C15.2857 67.812 17.0229 67.9308 18.4551 67.1788L35.4693 58.1416L52.4835 67.1788C53.9157 67.9308 55.6529 67.8252 56.9658 66.8753C58.2786 65.9254 58.9417 64.3291 58.6765 62.7459L55.401 43.5238L69.2192 29.9219C70.3596 28.8006 70.7707 27.125 70.2668 25.6079C69.7629 24.0907 68.45 22.9825 66.8587 22.745L47.8023 19.9481L39.2753 2.49387Z" fill="#FEC808"/>
                    </svg>

                    <svg width="15" height="15" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.2753 2.49387C38.5724 1.04265 37.0872 0.119141 35.4561 0.119141C33.8249 0.119141 32.3529 1.04265 31.6368 2.49387L23.1098 19.9481L4.06669 22.745C2.47534 22.9825 1.14922 24.0907 0.658552 25.6079C0.167886 27.125 0.565723 28.8006 1.70619 29.9219L15.5244 43.5238L12.2621 62.7459C11.9969 64.3291 12.66 65.9386 13.9728 66.8753C15.2857 67.812 17.0229 67.9308 18.4551 67.1788L35.4693 58.1416L52.4835 67.1788C53.9157 67.9308 55.6529 67.8252 56.9658 66.8753C58.2786 65.9254 58.9417 64.3291 58.6765 62.7459L55.401 43.5238L69.2192 29.9219C70.3596 28.8006 70.7707 27.125 70.2668 25.6079C69.7629 24.0907 68.45 22.9825 66.8587 22.745L47.8023 19.9481L39.2753 2.49387Z" fill="#FEC808"/>
                    </svg>

                    <svg width="15" height="15" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.2753 2.49387C38.5724 1.04265 37.0872 0.119141 35.4561 0.119141C33.8249 0.119141 32.3529 1.04265 31.6368 2.49387L23.1098 19.9481L4.06669 22.745C2.47534 22.9825 1.14922 24.0907 0.658552 25.6079C0.167886 27.125 0.565723 28.8006 1.70619 29.9219L15.5244 43.5238L12.2621 62.7459C11.9969 64.3291 12.66 65.9386 13.9728 66.8753C15.2857 67.812 17.0229 67.9308 18.4551 67.1788L35.4693 58.1416L52.4835 67.1788C53.9157 67.9308 55.6529 67.8252 56.9658 66.8753C58.2786 65.9254 58.9417 64.3291 58.6765 62.7459L55.401 43.5238L69.2192 29.9219C70.3596 28.8006 70.7707 27.125 70.2668 25.6079C69.7629 24.0907 68.45 22.9825 66.8587 22.745L47.8023 19.9481L39.2753 2.49387Z" fill="#FEC808"/>
                    </svg>

                    <svg width="15" height="15" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.2753 2.49387C38.5724 1.04265 37.0872 0.119141 35.4561 0.119141C33.8249 0.119141 32.3529 1.04265 31.6368 2.49387L23.1098 19.9481L4.06669 22.745C2.47534 22.9825 1.14922 24.0907 0.658552 25.6079C0.167886 27.125 0.565723 28.8006 1.70619 29.9219L15.5244 43.5238L12.2621 62.7459C11.9969 64.3291 12.66 65.9386 13.9728 66.8753C15.2857 67.812 17.0229 67.9308 18.4551 67.1788L35.4693 58.1416L52.4835 67.1788C53.9157 67.9308 55.6529 67.8252 56.9658 66.8753C58.2786 65.9254 58.9417 64.3291 58.6765 62.7459L55.401 43.5238L69.2192 29.9219C70.3596 28.8006 70.7707 27.125 70.2668 25.6079C69.7629 24.0907 68.45 22.9825 66.8587 22.745L47.8023 19.9481L39.2753 2.49387Z" fill="#FEC808"/>
                    </svg>

                    <p>55 avaliações</p>
                    <h6>Em Estoque</h6>

                    <h3>Total: R$16,90</h3>
                </div>
                <div>
                    <button onClick={aumentarContador}>+</button>
                      <span>{contador}</span>
                     <button onClick={diminuirContador}>-</button>
                  </div>


                <button>Adicionar ao Carrinho</button>
                <button>Finalizar compra</button>
            </div>
        </section>       
    )
}
