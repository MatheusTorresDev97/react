import React from 'react';
import Radio from './components/Radio';
import DiferentesGrupos from './components/DiferentesGrupos';
//Radio
//No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.

const App = () => {
  return (
    <div>
      <Radio />
      <br /><br />
      <DiferentesGrupos />
    </div>
  )
}

export default App