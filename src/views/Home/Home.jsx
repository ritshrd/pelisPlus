import React from 'react'
import Navbar from '../menu/navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div><Navbar/></div>
    <div>
        <Outlet/>
    </div>
    
    </>
  )
}
