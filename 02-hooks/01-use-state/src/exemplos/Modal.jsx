import React from 'react'

const Modal = ({ modal, setModal }) => {
    return (
        modal &&
        <div>
            Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
        </div>
    )
}

export default Modal