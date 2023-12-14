import React, { ReactNode } from 'react';

interface MeuComponenteProps {
  children: ReactNode; //prop em um componente React, com children
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; //evento onClick em React
}

const Props: React.FC<MeuComponenteProps> = ({ children, onClick  }) => {
  return (
    <div>
      {children}
      <button onClick={onClick}>
      Clique em mim
    </button>
    </div>
  );
};

export default Props;