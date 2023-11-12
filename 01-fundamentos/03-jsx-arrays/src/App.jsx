import React from 'react'
import Exercicio from './Exercicio'

const App = () => {
  //JSX Arrays
  //O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];
  //Keys
  //O JSX necessita de uma key única para cada elemento da Array.
  //Map
  //É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  //Array de Objetos O cenário mais comum é trabalhar com array's de objetos.
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <div>
      <p>{produtos}</p>
      <br />
      <ul>
        {filmes.map((filme) => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
      <ul>
        {livros.filter((livro) => livro.ano >= 1988)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome}, {livro.ano}
            </li>
          ))
        }
      </ul>
      <Exercicio />
    </div>
  )
}

export default App
