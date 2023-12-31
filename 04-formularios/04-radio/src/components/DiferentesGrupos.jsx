import React, {useState} from "react";

//Defina um estado para cada grupo.

const DiferentesGrupos = () => {
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");

  return <form>
    <h2>Dispositivo</h2>
    <label>
        <input type="radio" 
        value="notebook"
        checked={produto === 'notebook'}
        onChange={({target}) => setProduto(target.value)}
        />
        Notebook
    </label>
    <label>
        <input type="radio"
         value="smartphone"
         checked={produto === 'smartphone'}
         onChange={({target}) => setProduto(target.value)}
         />
         Smartphone
    </label>

    <h2>Cor</h2>
    <label>
        <input type="radio"
        value="azul"
        checked={cor === 'azul'}
        onChange={({ target }) => setCor(target.value)}
         />
         Azul
    </label>
    <label>
        <input type="radio"
        value="vermelho"
        checked={cor === 'vermelho'}
        onChange={({ target }) => setCor(target.value)}
         />
         Vermelho
    </label>
  </form>;
};

export default DiferentesGrupos;
