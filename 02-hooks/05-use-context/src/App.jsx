import React from 'react'
import Estados from './components/Estados'
import ExemploContext from './components/ExemploContext'
import Principal from './context/Principal'

//createContext
//O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. 
//Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

//Provider
//O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context.
// Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto.

//UseContext
//O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. Devemos passar o contexto criado como seu agumento.

const App = () => {
  return (
    <div>
      <Estados />
      <br /><br />
      <ExemploContext />
      <br /><br />
      <Principal />
    </div>
  )
}

export default App