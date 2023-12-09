import React, { Suspense, lazy, useState } from 'react'
//import Contato from './Contato'
const Contato = lazy(() => import('./Contato'))

//Com o Lazy e Suspense podemos dividir o código da nossa aplicação. Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias.

const App = () => {
  const [ativo, setAtivo] = useState(false)

  return (
    <div>
      {ativo && <Suspense fallback={<div>Carregando ...</div>}>
        <Contato />
      </Suspense>
      }
      <button onClick={() => setAtivo(true)}>Ativar</button>
    </div>
  )
}

export default App

