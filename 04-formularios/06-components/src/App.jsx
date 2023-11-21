import React, { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";

//Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.

const App = () => {
  const [nome, setNome] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");
  const [fruta, setFruta] = useState("");
  const [termos, setTermos] = useState([]);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(nome, produto, cor, fruta, termos);
  };

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={["azul", "verde", "amarelo"]}
        value={cor}
        setValue={setCor}
      />
      <Checkbox
        options={["Uva", "Laranja", "Limão"]}
        value={fruta}
        setValue={setFruta}
      />
      <Checkbox
        options={["Termos e Condições"]}
        value={termos}
        setValue={setTermos}
      />

      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
};

export default App;
