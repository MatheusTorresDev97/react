import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Produto from "./components/Produto";

//Rota Dinâmica

//O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.

//useParams
//O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.

//useLocation
//Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
