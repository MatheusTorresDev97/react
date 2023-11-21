import React from "react";
import useForm from "./hooks/UseForm";
import Input from "./components/Input";

//useForm
//Podemos definir um custom hook para formulários.

const App = () => {
  const cep = useForm("cep");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (cep.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
