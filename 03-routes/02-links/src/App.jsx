import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Pagina404 from "./components/Pagina404";

//React Router Dom
//É uma extensão que permite gerenciarmos as rotas do React.
//npm install react-router-dom

//BrowserRouter, Routes e Route
//O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router.
//O Routes define a área em que vamos colocar os nossos Route
//O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.

//404 - Não Encontrado
//O * renderiza um elemento para todas as rotas que não foram definidas em path. Uso ideal para mostrarmos um componente indicando que a página não existe.

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;