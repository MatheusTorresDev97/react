import React, { useState } from "react";

//Selecione
//Defina o primeiro valor como disabled e com uma string pura, assim o usuário terá que selecionar um valor.

const Selecione = () => {
  const [select, setSelect] = useState("");
  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

export default Selecione;
