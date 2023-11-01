import axios from 'axios'
import './index.scss';
import Cabecalho from "../../components/cabecalho"
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

export default function Carrinho(){
    const[values, setValues] = useState('');


return(
    <div className='pagina-carrinho'>
        <Cabecalho/>
            
    </div>

)

}