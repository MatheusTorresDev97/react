//É preciso anotar as props que um componente recebe.
//Tipo nativo do React que já anota a children das props. Recebe uma interface genérica em <>
//É comum desestruturarmos as propriedades na função.

import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  children?: React.ReactNode;
  onClick?: () => void;
  tamanho?: string;
}>

const Props2 = ({ children, onClick, tamanho }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Props2;
