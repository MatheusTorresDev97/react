import React, { useState } from "react";

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const Exercicio = () => {
  const [response, setResponse] = useState(null);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />
      <label htmlFor="senha">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
  );
};

export default Exercicio;
