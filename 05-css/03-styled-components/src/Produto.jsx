import React from "react";
import styled from "styled-components";

//Pseudo
//Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento.

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produtos = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const Produto = () => {
  return (
    <ProdutosContainer>
      <Produtos>
        <Titulo>
          Notebook <Preco>R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
        <Produtos>
          <Titulo>
            Smartphone <Preco>R$ 2999</Preco>
          </Titulo>
          <Comprar>Comprar</Comprar>
        </Produtos>
      </Produtos>
    </ProdutosContainer>
  );
};

export default Produto;
