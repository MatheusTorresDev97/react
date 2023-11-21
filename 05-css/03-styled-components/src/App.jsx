import React from "react";
import styled from "styled-components";
import Produto from "./Produto";
import Estado from "./Estado";

//Styled Components
//Permite escrevermos o CSS diretamente no JavaScript
//Ao invés de classes, criamos componentes com um estilo único.

//styled
//O styled é um objeto com diferentes métodos que representam as tags de HTML.

//Props
//Podemos passar propriedades como em um component de React.

const Title = styled.h1`
  font-size: 1.5rem;
  color: tomato;
`;

const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  return (
    <div>
      <Title>Título principal</Title>
      <br />
      <br />
      <Produto />
      <Preco cor="#84e">R$ 2999</Preco>
      <br /><br />
      <Estado/>
    </div>
  );
};

export default App;
