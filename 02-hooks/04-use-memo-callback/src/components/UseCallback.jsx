import React, {useState, useCallback} from 'react'

//useCallback
//Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.

const UseCallback = () => {
    const [contar, setContar] = useState(0);
    const handleClick = useCallback(() => {
        setContar((contar) => contar + 1);
      }, []);

  return (
    <button onClick={handleClick}>{contar}</button>
  )
}

export default UseCallback