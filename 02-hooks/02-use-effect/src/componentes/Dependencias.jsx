import React, { useState, useEffect } from "react";

//No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências
//A lista de dependências serve para informarmos quando o efeito deve ocorrer.

const Dependencias = () => {
  const [contar, setContar] = useState(0);
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  useEffect(() => {
    console.log("Apenas quando renderiza");
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log("Sempre ocorre, mas antes do useEffect");

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  useEffect(() => {
    console.log("Toda vez que atualiza o contar");
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default Dependencias;