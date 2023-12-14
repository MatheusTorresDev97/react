//As interfaces de React com TypeScript estão disponíveis diretamente no objeto React importado de React.

import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
    return <button>{children}</button>;
  };
  
  export default Button;