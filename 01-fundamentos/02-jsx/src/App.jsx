import React from 'react';
import Exercicio from './Exercicio';

//Atributos
//Atributos podem ser passados como no HTML, porém com alguns casos especiais.

//Casos Especiais
//O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className.

//camelCase
//Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.

//Expressões / Variáveis
//Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}.

//Também posso atribuir JSX direto a uma constante/variável

//Você pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.

//O style irá receber um objeto com as propriedades do elemento em camelCase.

const App = () => {

  const estiloP = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  const nome = 'Matheus';
  function meuNome() {
    return 'Matheus';
  }
  const desconto = 50;
  const preco = 250;
  const ativo = true;
  const Titulo = <h1>Meu título</h1>;


  return (
    <>
    <div>
      <p style={estiloP}>{nome}</p>
      <p style={{ color: 'green' }}>{preco - desconto}</p>
      <div>{Titulo}</div>;
      <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
      <a href="" title='Atributos React'></a>
      <div className="grid">Teste</div>
      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
      </form>
      <p>{meuNome()}</p>
    </div>
    <Exercicio />
    </>
  )
}

export default App
