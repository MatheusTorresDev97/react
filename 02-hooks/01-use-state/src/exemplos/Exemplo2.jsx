import React, {useState} from 'react'

//Múltiplos Estados
//Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

const Exemplo2 = () => {
    const [contar, setContar] = useState(0);
    const [ativo, setAtivo] = useState(false);
    const [dados, setDados] = useState({ nome: 'Matheus', idade: 25 });

    const handleClick = () => {
        setAtivo(!ativo)
        setDados({...dados, faculdade: 'Possui Faculdade'})
    }

  return (
    <div>
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  )
}

export default Exemplo2