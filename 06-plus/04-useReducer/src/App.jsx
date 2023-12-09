import React from 'react'
import SemReducer from './SemReducer'
import ComReducer from './ComReducer'
import Exemplo from './Exemplo'

const App = () => {
  return (
    <div>
      {/*O useReducer serve para lidarmos com estados que possuam funções fixas responsáveis por modificar o mesmo. */}
      <SemReducer />
      <br /><br /><br />
      <ComReducer />
      <br /><br /><br />
      <Exemplo />
    </div>
  )
}

export default App


