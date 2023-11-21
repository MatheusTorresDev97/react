import React, { useState } from "react";

const Multiplos = () => {
  const [cores, setCores] = useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  };

  const handleChecked = (cor) => {
    return cores.includes(cor);
  };

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked("azul")}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked("vermelho")}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked("verde")}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked("amarelo")}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked("roxo")}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Multiplos;
