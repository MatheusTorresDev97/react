import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
 const location =  useLocation()

 useEffect(() => {

 }, [location])


    return (
        <nav>
            <Link to='/'> Home</Link> | 
            <Link to='/sobre'>Sobre</Link>
        </nav>
    )
}

export default Header
