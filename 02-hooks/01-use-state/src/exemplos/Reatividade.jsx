import React, { useState } from "react";

//Reatividade
//Não modifique o estado diretamente.
//Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

//Callback
//Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.

//Callback Valor Inicial
//A definição do estado inicial também pode ser feita com um callback.

const Reatividade = () => {
  const [ativo, setAtivo] = useState(true);
  const [logado, setLogado] = useState(() => {
    const ativoLocal = window.localStorage.getItem("ativo");
    return ativoLocal;
  });

  const handleClick = () => {
    // usando um callback
    setAtivo((anterior) => !anterior);
  };

  const handleLog = () => {
    setLogado((anterior) => !logado);
  };

  return <div>
    <button onClick={handleClick}>
        {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
    <br />
    <button onClick={handleLog}>
        {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  </div>;
};

export default Reatividade;