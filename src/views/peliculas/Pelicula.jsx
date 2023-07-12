import React, {useState} from 'react'
import Card from '../components/card/card_component'
import './style/pelicula.css'
import pelisJson from'./pelisJson.json'


export default function Pelicula() {

  


  return (
    <div className='container-movies'>
        { pelisJson.peliculas.map((movie, index) => 
            <Card movie={movie} key={index}/>
        )}
    </div>
  )
}


 // funcion que es destinada para una tarea especifica
// useState // hook que permite manejar el estado de un componente