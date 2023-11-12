import React from 'react'
import Titulo from './Titulo'
import Header from './Header'


//Propriedades
//Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props.
//Podemos passar quantas propriedades quisermos.

//Children
//Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade children.

//Rest e Spread
//Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

//Dados
//Podemos passar diferentes tipos de dados e até outros componentes nas propriedades.


const App = () => {
  const logado = true;
  const nome = 'Matheus';

  return (
    <section>
      <Header logado={logado} nome={nome} />
      {/* <Titulo texto='Meu Primeiro Título' cor='blue' />
      <Titulo texto='Meu Segundo Título' cor='red' /> */}
      <Titulo cor='red'>
        Meu primeiro Título
      </Titulo>

    </section>
  )
}

export default App
