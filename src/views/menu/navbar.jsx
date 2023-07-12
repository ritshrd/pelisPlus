import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <header>
        <nav className='container-nav'>
            <Link to={'/'} > HOme </Link>
            <span>Terror</span>
            <span>Anime</span>
            <span>Accion</span>
            <span>Comedia</span>
            <Link to={'peliculas/'} > Peliculas </Link>
        </nav>
    </header>
    </>
  )
}
