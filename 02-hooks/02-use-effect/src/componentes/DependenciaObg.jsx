import React, { useState, useEffect } from "react";

//Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

const DependenciaObg = () => {
  const [contar, setContar] = useState(0);

  const titulo = "Clicou ";

  useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default DependenciaObg;
