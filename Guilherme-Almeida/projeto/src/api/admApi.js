import axios from "axios";
const api = axios.create({
        baseURL: 'http://localhost:5000'
})



export async function  LoginAdm (usuario, senhaAdm) {
     const r = await api.post('/adm/login', {
        usuario: usuario,
        senhaAdm: senhaAdm
     });

     return r.data;
}

