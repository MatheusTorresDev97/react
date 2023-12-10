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