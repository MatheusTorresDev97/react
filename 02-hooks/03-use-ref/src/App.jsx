import React from "react";
import UseRefExemplo1 from "./componentes/UseRefExemplo1";
import UseRefExemplo2 from "./componentes/UseRefExemplo2";
import UseRefExemplo3 from "./componentes/UseRefExemplo3";
import UseRefExemplo4 from "./componentes/UseRefExemplo4";

//useRef
//Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento.
//Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.
//Muito usado em Formulários
//Guarda referencia de valores

//focus()
//É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.

//Referência
//O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.

// o hook useRef em React não é usado para passagem por referência, mas sim para acessar elementos do DOM ou manter valores que não causam re-renderizações.

const App = () => {
  return (
    <div>
      <UseRefExemplo1 />
      <br />
      <UseRefExemplo2 />
      <br />
      <UseRefExemplo3 />
      <br />
      <UseRefExemplo4 />
    </div>
  );
};

export default App;
