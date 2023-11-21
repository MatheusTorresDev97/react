import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import UseNavigate from './UseNavigate';

//NavLink
//O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. 
//É necessário colocar o end no NavLink responsável por navegar para a raiz do app.

const Header = () => {
    return (
        <>
        <nav>
            <NavLink to="/" end>Home</NavLink>   |
            <NavLink to="sobre">Sobre</NavLink> |
            <NavLink to="contato">Contato</NavLink>
        </nav>
        <UseNavigate />
        </>
    )
}

export default Header