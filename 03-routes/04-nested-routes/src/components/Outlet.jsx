import React from 'react'
import { useParams } from 'react-router-dom';

//Outlet
//Outra forma é definindo todos as rotas diretamente no App e utilizar o component Outlet para mostrarmos a rota.



const Outlet = () => {
    const params = useParams();
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>

  )
}

export default Outlet
