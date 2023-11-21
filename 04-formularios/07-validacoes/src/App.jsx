import React, { useState } from "react";
import Input from "./components/Input";

//onBlur
//O onBlur é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo.
//A validação pode ser feita com JavaScript utilizando REGEX.

//onSubmit
//Devemos impedir o envio do formulário caso exista erro no preenchimento.

const App = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (validateCep(cep)) {
      console.log("Enviar");
    } else {
      console.log("Não Enviar");
    }
  };

  const validateCep = (value) => {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleBlur = ({ target }) => {
    validateCep(target.value);
  };

  const handleChange = ({ target }) => {
    if (error) validateCep(target.value);
    setCep(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
