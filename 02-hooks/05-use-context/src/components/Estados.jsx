import React, {useState} from 'react'
///Prop Drilling
//Passagem de estado entre componentes

const Estados = () => {
    const [name, setName] = useState('Inicio')


  return (
    <>
    <div>{name}</div>
    <ChildrenOne changeName={setName} />
    </>
  )
}

const ChildrenOne = ({changeName}) => {
    return <ChildrenTwo changeName={changeName} />
}

const ChildrenTwo = ({changeName}) => {
    return <button onClick={() => changeName('Matheus não desista')}>Mude o nome</button>
}

export default Estados