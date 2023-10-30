import { useNavigate, useEffect } from 'react';
import localStorage from 'local-storage';

export default function Storage(){
    const navigate = useNavigate();

    useEffect(() => {

    
    if (!localStorage('usuario-logado')) {
      navigate('/login/adm')
    }

    if(localStorage('usuario-logado')){
      navigate('/admin')
    }
  }, [])};

    