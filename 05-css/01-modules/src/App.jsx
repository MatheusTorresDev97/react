import React from 'react'
import Produto from './Produto'
//CSS Modules
//Os modules garantem que as classes utilizada sejam sempre únicas, evitando o conflito.
// O modo já vem configurando com o Vite, basta definirmos o nome do arquivo css com a palavra .module. 
//Ex: Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes únicos para as classes.

//camelCase
//Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens titulo-principal.


const App = () => {
  return (
   <>
   <Produto />
   </>
  )
}

export default App