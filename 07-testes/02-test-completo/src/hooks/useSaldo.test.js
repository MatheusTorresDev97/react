import { renderHook, act } from '@testing-library/react';
import { buscaSaldo } from '../services/saldo';
import useSaldo from './useSaldo';

jest.mock('../services/saldo');

const mockSaldo = {
    valor: 100,
  };

  describe('hooks/useSaldo()', () => {
    test('Deve retornar o saldo e uma função para atualizá-lo', async () => {
      buscaSaldo.mockImplementation(() => mockSaldo.valor);
      const { result } = renderHook(() => useSaldo());
  
      expect(result.current[0]).toEqual(0);
  
      await act(async () => {
        result.current[1]();
      });
  
      expect(result.current[0]).toEqual(mockSaldo.valor);
    });
  });

  //npm run test:coverage

//   File: na primeira coluna, temos os arquivos que estão sendo testados. Todos os arquivos que terminam com .jsx ou .js. Teremos os componentes, as páginas, os hooks, a parte da API.

// %Stmts: na segunda coluna, temos os statements, que são as declarações de variáveis e outras coisas que estão sendo testadas durante a execução dos testes.

// %Branch: na terceira coluna, estão as branches, que são, basicamente, as declarações, os blocos de código if e else.

// %Funcs: na quarta coluna, temos as funções que estão sendo executadas durante os testes.

// % Lines: na quinta linha, temos a quantidade de linhas que estão sendo testadas na execução do teste.

// Uncovered Line #s: na última coluna, estão as linhas não cobertas, as linhas que não testamos, elas estão associadas aos componentes que não foram testados.