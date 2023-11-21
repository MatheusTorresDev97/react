import React from "react";
import Reatividade from "./components/Reatividade";
import Form from "./components/Form";
import MultiplosCampos from "./components/MultiplosCampos";
import Objeto from "./components/Objeto";
import Exercicio from "./components/Exercicio";

const App = () => {
  return (
    <div>
      <Reatividade />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <MultiplosCampos />
      <br /><br />
      <Objeto />
      <br /><br />
      <Exercicio />
    </div>
  );
};

export default App;
