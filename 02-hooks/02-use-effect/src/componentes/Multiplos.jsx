import React, { useState, useEffect } from 'react'

//Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.

const Multiplos = () => {
    const [contar, setContar] = useState(0);
    const [modal, setModal] = useState(false);
  
    useEffect(() => {
      document.title = 'Total ' + contar;
    }, [contar]);
  
    useEffect(() => {
      setContar(0);
    }, [modal]);
  
    return (
      <div>
        {modal && <p>Meu Modal</p>}
        <button onClick={() => setModal(!modal)}>Modal</button>
        <hr />
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
    );
}

export default Multiplos