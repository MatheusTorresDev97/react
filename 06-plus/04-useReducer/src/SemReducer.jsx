import React, { useState } from 'react'

const SemReducer = () => {
    const [contar, setContar] = useState(0);

    const aumentar = () => {
        setContar(contar + 1);
    }

    const reduzir = () => {
        setContar(contar - 1);
    }


    return (
        <div>
            <button onClick={aumentar}>+</button>
            <button onClick={reduzir}>-</button>
            <p>{contar}</p>
        </div>
    )
}

export default SemReducer
