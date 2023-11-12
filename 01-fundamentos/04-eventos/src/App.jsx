import React from 'react'

//Eventos
//Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

//Função Anônima
//É possível executar uma função anônima no evento.

//window/document
//Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.

const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }
  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
      <button onClick={({ target }) => target.classList.toggle('ativa')}>
        Ativar
      </button>
      <div style={{ height: '200vw' }}>Div</div>;
    </div>
  )
}

export default App
