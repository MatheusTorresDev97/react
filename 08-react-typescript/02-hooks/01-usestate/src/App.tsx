//Generics para definir os possíveis tipos: useState<null | User>(null).
//React.Dispatch<React.SetStateAction<tipo>> é o tipo da função que modifica o estado do hook useState.

//Não precisamos anotar nenhum tipo especial no useEffect, 
//ele é um hook que recebe uma função (função ativada no efeito) que retorna uma função (função ativada quando o componente é "desmontado").

import {  useState, useEffect } from "react";
import Input from "./Input";

type Venda = {
  id: string;
  nome: string;
  status: string;
}

const App = () => {
  const [data, setData] = useState<null | Venda[]>(null);
  const [inicio, setInicio] = useState('');
  const [final, setFinal] = useState('');

  useEffect(() => {
    if (inicio !== '' && final !== '')
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((r) => r.json())
        .then((json) => setData(json as Venda[]))
        .catch((error) => console.log(error));
  }, [inicio, final]);

  return (
    <div>
    <div>
      <Input label="Início" setState={setInicio} value={inicio} type="date" />
      <Input label="Final" setState={setFinal} value={final} type="date" />
    </div>
    <ul>
      {data &&
        data.map((venda) => (
          <li key={venda.id}>
            {venda.nome}: {venda.status}
          </li>
        ))}
    </ul>
  </div>
  )
}

export default App