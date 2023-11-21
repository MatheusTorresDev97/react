import React from 'react'
import Button from './Button'

//Instalando o prop-types
//npm install prop-types

//O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não. 

//defaultProps
//Podemos também definir valores padrões para as propriedades através do defaultProps. Não é necessário o uso do prop-types para definirmos uma propriedade padrão. Isso faz parte do React.


const App = () => {
  return (
    <div>
      <Button width={100}>
          Clique Aqui
      </Button>
    </div>
  )
}

export default App
