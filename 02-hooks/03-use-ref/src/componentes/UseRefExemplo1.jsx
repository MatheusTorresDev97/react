import React, { useState, useRef } from "react";

const UseRefExemplo1 = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  const handleClick = () => {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  };

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
        ref={inputElement}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default UseRefExemplo1;
