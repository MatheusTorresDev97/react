import React from "react";
import "./App.css";
import Title from "./components/Title";
import Produto from "./components/Produto";

//Import
//A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript.

//Componentes
//Ao importar um componentes, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build.
//Independente de você utilizar o componente ou não.

//Conflito
//Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.

//main.css (bundle final)

// .Title {
//   font-size: 2rem;
//   font-family: sans-serif;
// }
// h1 {
//   color: tomato;
// }
// h1.Title {
//   font-family: serif;
// }

const App = () => {
  return (
    <div className="container">
      <Title text="Meu titulo" />
      <Produto />
      <p className="text">Meu site</p>
    </div>
  );
};

export default App;
