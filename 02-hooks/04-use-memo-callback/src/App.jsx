import React from "react";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";

//Otimização de Cálculos: Se o seu dashboard realiza cálculos complexos para criar gráficos, tabelas ou exibir estatísticas, você pode usar o useMemo para evitar recalculos frequentes, melhorando o desempenho da atualização desses componentes.

//Renderização Condicional: Se o dashboard tem elementos que são renderizados condicionalmente com base em alguma lógica, você pode usar o useMemo para calcular as condições e decidir se um componente deve ser renderizado ou não.

//Listas Dinâmicas: Se o dashboard exibe listas dinâmicas de elementos, como tabelas ou gráficos, você pode usar o useMemo para memorizar os dados da lista e evitar que ela seja recriada a cada renderização.

const App = () => {
  return (
    <div>
      <UseCallback />
      <br />
      <UseMemo />
    </div>
  );
};

export default App;
