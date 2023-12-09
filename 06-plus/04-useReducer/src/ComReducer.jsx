import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action) {
        case 'aumentar':
            return state + 1;
        case 'reduzir':
            return state - 1;
        default:
            throw new Error();
    }
}

const ComReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <button onClick={() => dispatch('aumentar')}>+</button>
            <button onClick={() => dispatch('reduzir')}>-</button>
            <p>{state}</p>
        </div>
    )
}

export default ComReducer
