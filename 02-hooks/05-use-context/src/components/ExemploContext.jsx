import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const ExemploContext = () => {
    const [name, setName] = useState('Inicio')

  return (
    <AppContext.Provider value={{name, setName}}>
        <div>{name}</div>
        <ChildrenOne changeName = {setName} />
    </AppContext.Provider>
  )
}


const ChildrenOne = () => {
    return <ChildrenTwo />
  }
  
  const ChildrenTwo = () => {
    const { setName } = useContext(AppContext) 
    return (
      <button onClick={() => setName('Matheuszinho do arrocha')}>Mude o nome</button>
    )
  }
  

export default ExemploContext