import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Produto from "./components/Produto";
import ProdutoDescricao from './components/ProdutoDescricao';
import ProdutoAvaliacao from './components/ProdutoAvaliacao';
import ProdutoCustomizado from './components/ProdutoCustomizado';

//Nested Routes
//Utilizamos nested routes quando precizamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. 
//Utilize o \* para definir que existem outras rotas dentro.

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
