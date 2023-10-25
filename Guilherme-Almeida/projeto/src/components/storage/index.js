import { useNavigate, useEffect } from 'react';

export default function Storage(){
    const navigate = useNavigate();

    useEffect(() => {
      if (!storage('usuario-logado')) {
        navigate('/login')
      }
    }, []);
  }