import React, { useState, useEffect } from "react";

//O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

const ChamadaApi = () => {
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    produtos();
  }, []);

  const produtos = async () => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/notebook"
    );
    const responseJson = await response.json();
    setDados(responseJson);
  };

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default ChamadaApi;