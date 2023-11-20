import React, { useState, useEffect } from 'react'

//useEffect
//Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. 
//Com o useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

const Introducao = () => {
    const [contar, setContar] = useState(0);

    useEffect(() => {
        console.log('Ocorre ao renderizar e ao atualizar');
    })

    return (
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
    )
}

export default Introducao