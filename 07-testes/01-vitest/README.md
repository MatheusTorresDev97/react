npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom vitest

Instalação de dependencias para teste no vitest
O jest-dom é oriundo do Testing Library do React;
O user-event é um pacote adicional do Testing Library que está relacionado à maneira como a pessoa usuária interage com os componentes;
O jsdom está relacionado à forma como nosso ambiente de teste lidará com os componentes;
A ferramenta Vitest, que procura por todos os arquivos de teste e executa os testes encontrados neles.

Crie um script no package.json
"teste": "vitest"

No vite.config.js

export default defineConfig({
plugins: [react()],
test: {
globals: true,
setupFiles: "./setupFile.js",
environment: "jsdom"
}
})

crio o arquivo na raiz do projeto setupFile.js
e
import "@testing-library/jest-dom"


"relatory": "vitest --coverage"
Adicione isso no package.json para fazer testes de cobertura

EXEMPLOS DE TESTES 
--
//getByText()

test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

//getAllByRole()

test('Deve renderizar uma lista de links', () => {
    render(<Menu />);
    const listaDeLinks = screen.getAllByRole('link');
    expect(listaDeLinks).toHaveLength(4);
  });

  //queryBy() e queryAllBy()

  //getBy(), ele retorna 1 ou não retorna nada
  // O queryBy() retorna 1 ou nulo


test('Não deve renderizar o link para Extrato', () => {
    render(<Menu />);
    const linkExtrato = screen.queryByText('Extrato');
    expect(linkExtrato).not.toBeInTheDocument();
  });

  //findBy() e findAllBy()




test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot(); //snapshots
  });

--
TESTE DE FORMULARIO

describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test(' com o type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test(' que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});


/* toHaveBeenCalled - onde testamos se foi chamado;
toHaveBeenCalledTimes - onde testamos quantas vezes foi chamado;
toHaveBeenCalledWith - onde testamos se foi chamado com algum parâmetro. */

//npm install --save-dev @testing-library/user-event @testing-library/dom

test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
  render(<Formulario />); // renderiza o componente
  const select = screen.getByRole('combobox'); // faz a consulta do elemento select
  userEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select

  expect(
    screen.getByRole('option', { name: 'Selecione um tipo de transação' })
      .selected
  ).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
    true
  ); // verifica se a opção de depósito foi selecionada
});