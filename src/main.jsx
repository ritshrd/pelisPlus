import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";

import Pelicula from './views/peliculas/Pelicula'
import './index.css'
import Home from './views/Home/Home.jsx'
import DataMovie from './views/DataMovie/DataMovie';
import YourImage from './views/img/pelisplus.jpg';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404 Sorry</h1>,
    children: [
      {
        path: "/",
        element: 
        
        <>
         <img
            className="rounded-xl scale-90 hover:scale-100 duration-300 w-auto h-auto"
            src={YourImage}
            alt="card image"
          />
      </>
        
        
        ,
      },
      {
        path: "/independientes",
        element: <Pelicula type="independientes" key="independientes" />,
      },
      {
        path: "/cienciaFiccion",
        element: <Pelicula type="cienciaFiccion" key="cienciaFiccion" />,
      },
      {
        path: "/comedia",
        element: <Pelicula type="comedia" key="comedia" />,
      },
      {
        path: "/:moview",
        element: <DataMovie/>
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}/>
  
)
