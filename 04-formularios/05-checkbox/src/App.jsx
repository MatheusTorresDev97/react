import React from 'react'
import CheckBox from './components/CheckBox'
import Multiplos from './components/Multiplos'
import Exercicio from './components/Exercicio'

//O estado do checkbox está relacionado ao checked.

//Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.

const App = () => {
  return (
    <div>
      <CheckBox />
      <br /><br />
      <Multiplos />
      <br /><br />
      <Exercicio />
    </div>
  )
}

export default App