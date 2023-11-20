import React, { useState } from "react";

//O useState é uma função que retorna uma Array com 2 valores.
//O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos.
//O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

const Exemplo1 = () => {
    const [ativo, setAtivo] = useState(true);
    // É a mesma coisa que:
    // const ativoArray = React.useState(true);
    // const ativo = ativoArray[0];
    // const setAtivo = ativoArray[1];
  
    return (
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Botao Ativo" : "Botao Inativo"}
      </button>
    );
  };
  
  export default Exemplo1;