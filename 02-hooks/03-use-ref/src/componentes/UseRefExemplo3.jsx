import React, { useState, useEffect, useRef } from "react";

const UseRefExemplo3 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <div className="card">
        <p>Contador Original: {count}</p>
        <p>Contador Referencia: {countRef.current}</p>
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      </div>
    </div>
  );
};

export default UseRefExemplo3;