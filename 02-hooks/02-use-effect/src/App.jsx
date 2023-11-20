import React from "react";
import Introducao from "./componentes/Introducao";
import Dependencias from "./componentes/Dependencias";
import DependenciaObg from "./componentes/DependenciaObg";
import ChamadaApi from "./componentes/ChamadaApi";
import Multiplos from "./componentes/Multiplos";
import Desmontar from "./componentes/Desmontar";

const App = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      <Introducao />
      <br />
      <Dependencias />
      <br />
      <DependenciaObg />
      <br />
      <ChamadaApi />
      <br />
      <Multiplos />
      <br />
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Desmontar />}
    </div>
  );
};

export default App;
