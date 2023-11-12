import React from 'react'

const Titulo = ({ children, cor }) => {
    return (
        <h1 style={{ color: cor }}>{children}</h1>
    )
}

export default Titulo
