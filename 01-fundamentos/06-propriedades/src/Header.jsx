import React from 'react'

const Header = ({ logado, nome }) => {
    if (logado) {
      return <header>Bem vindo, {nome}</header>;
    } else {
      return <header>Header</header>;
    }
  };

export default Header
