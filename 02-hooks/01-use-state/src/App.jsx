import React, { useState } from 'react'
import Exemplo1 from './exemplos/Exemplo1';
import Exemplo2 from './exemplos/Exemplo2';
import Exemplo3 from './exemplos/Exemplo3';

//useState
//Chame useState no nível superior do seu componente para declarar uma variável de estado.
//useState um React Hook que permite adicionar uma variável de estado ao seu componente.
// const [state, setState] = useState(initialState)
//O estado atual. Durante a primeira renderização, ele corresponderá ao que initialState que você passou.
//A setfunção que permite atualizar o estado para um valor diferente e acionar uma nova renderização.

const App = () => {
  const [age, setAge] = useState(25);
  const [name, setName] = useState("Matheus");

  const handleClick = (e) => {
    e.preventDefault();
    setName("Torres");
    setAge(age + 1);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Alterar Nome e Idade</button>
      <br />
      <Exemplo1 />
      <br />
      <Exemplo2 />
      <br />
      <Exemplo3 />
    </div>
  )
}

export default App