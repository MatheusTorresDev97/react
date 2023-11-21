import React, { useState } from 'react'

//Reatividade
//Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.

const Reatividade = () => {
    const [nome, setNome] = useState('')


  return (
    <form>
        <label htmlFor="nome">Nome</label>
        <input 
        type="text"
        id='nome'
        value={nome}
        onChange={({target}) => setNome(target.value)}
        />
        <p>{nome}</p>
    </form>
  )
}

export default Reatividade