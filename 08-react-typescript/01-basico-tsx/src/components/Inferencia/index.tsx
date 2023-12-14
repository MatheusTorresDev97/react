import { useState } from "react";

//O TypeScript faz um bom trabalho em inferir os tipos no React.

const Inferencia = () => {
  const [total, setTotal] = useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Inferencia;
