import React from 'react'

//Imagens
//Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.
import foto from './img/foto.jpg';

//Plugin para instalação de SVG 
//npm install vite-plugin-svgr
import {ReactComponent as Dog} from './img/dog.svg';

const App = () => {
  return (
    <div>
      <img src={foto} alt="Cachorro" />
      <br />
      <Dog />
    </div>
  )
}

export default App