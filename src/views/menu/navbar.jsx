import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FilmIcon, HomeIcon, XCircleIcon, VideoCameraIcon } from '@heroicons/react/24/outline'







export default function Navbar() {

  const [open, setOpen] = useState(true)

  return (
    
    
<nav className={`${open? 'w-72' : 'w-16'} duration-300 h-screen lg:left-0 p-4 overflow-y-auto text-center bg-gray-900 `}>




  

<div className='relative'>
<div className=' cursor-pointer absolute right-1 ' onClick={()=> setOpen(!open)}><XCircleIcon className="h-6 w-6 text-blue-500" /> </div>   
</div>
    
    <div className="" >
     

      <div className="text-gray-100 text-xl pt-6">
        <div className={`p-2.5 mt-1 flex items-center ${open? '' : 'px-0 justify-center'}`}>
        <VideoCameraIcon className={`h-6 w-6 text-red-400 ${open? 'hidden' : ''}`} />
          <h1 className={`font-bold text-gray-200 text-[15px] ml-3 ${open? '' : 'hidden'}`}> PelisPlus </h1>
          
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      
      <NavLink to={'/'} >
      <div className={`${open? 'px-4' : 'px-0 justify-center'} p-2.5 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 text-white `}>

        <HomeIcon className="h-[24px] text-blue-500" /> 
        <span className={`text-[15px] ml-4 text-gray-200 font-bold ${open? '' : 'hidden'}`}> Inicio </span>
      </div>
      </NavLink>


      <NavLink to={'independientes/'}>
      <div className={`${open? 'px-4' : 'px-0 justify-center'} p-2.5 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 text-white `}  >

       <FilmIcon className="h-6 w-6 text-blue-500" /> 
        <span className={`text-[15px] ml-4 text-gray-200 font-bold ${open? '' : 'hidden'}`}> 
       Indepenientess </span>
      </div>
      </NavLink> 

    
      <NavLink to={'comedia/'}>
      <div className={`${open? 'px-4' : 'px-0 justify-center'} p-2.5 mt-3 flex items-center rounded-md cursor-pointer hover:bg-blue-600 text-white `}  >

       <FilmIcon className="h-6 w-6 text-blue-500" /> 
        <span className={`text-[15px] ml-4 text-gray-200 font-bold ${open? '' : 'hidden'}`}> 
       Comedia </span>
      </div>
      </NavLink> 


      <div className="my-4 bg-gray-600 h-[1px]"></div>


    </div>

    
  
        </nav>

    
  )
}
