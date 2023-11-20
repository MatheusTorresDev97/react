import React, {useEffect} from 'react'

//As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.

const Desmontar = () => {
    useEffect(() => {
        const handleScroll = (event) => {
            console.log(event);
        }
        window.addEventListener('scroll', handleScroll)
        // Limpa o evento quando o elemento é removido do DOM.
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    })


  return (
   <p style={{height: '200vh'}}>Produto</p>
  )
}

export default Desmontar