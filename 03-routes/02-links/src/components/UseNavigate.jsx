import React from 'react'
import { useNavigate } from 'react-router-dom';

//useNavigate
//O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.

const UseNavigate = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sobre');
    }

  return (
    <div>
        <button onClick={handleClick}>Navegue para Sobre</button>
    </div>
  )
}

export default UseNavigate