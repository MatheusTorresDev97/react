import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
     <NavLink to="produto/notebook">Notebook</NavLink>
     <NavLink to="produto/smartphone">Smartphone</NavLink>
    </div>
  )
}

export default Home
