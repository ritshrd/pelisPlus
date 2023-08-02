import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/card_component";
import "./style/pelicula.css";

//import pelisJson from'./pelisJson.json'

export default function Pelicula(props) {
  const [pelisState, setPelisState] = useState([]);
  const [pelisFilter, setPelisFilter] = useState ([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado de barra de busqueda
  


  const [search, setSearch] = useState('')

  useEffect(() => {
    if (loading) {
      console.log(`https://api-pelis-back.onrender.com/${props.type}`);
      fetch(`https://api-pelis-back.onrender.com/${props.type}`)
        .then((response) => response.json())
        .then((data) => {
          setPelisState(data);
          setPelisFilter(data.peliculas);
          setLoading(false);
        });
    }
  }, []);


  const searchBar = (e) => {
    let value = e.target.value;
    setSearch(e.target.value);

    console.log(search);
    if (!value) {
      // Si el valor de búsqueda está vacío, restaurar todas las películas originales
      setPelisFilter(pelisState.peliculas)
    } else {
      // Filtrar las películas según el valor de búsqueda
      const filteredPeliculas = pelisState.peliculas.filter((movie) =>
        movie.titulo.toLowerCase().includes(value.toLowerCase())
      );
      setPelisFilter(filteredPeliculas);
    }
}


  if (loading) {
    return <h1>Loading...</h1>;
  } else {

    
 


    return (
      
      

<div className="flex flex-col bg-slate-700 p-6 pt-0 pl-20">
      <div>
      
      <h2 className="mt-5 pl-5 text-3xl text-white">Buscar</h2>

      <input
type="text"
placeholder="Buscar"
className="mt-1 px-3 py-2 bg-slate-500 border shadow-sm border-slate-300 placeholder-slate-200 text-slate-200 focus:outline-none focus:border-sky-500 focus:ring-slate-400 block w-1/3 rounded-md sm:text-sm focus:ring-1 m-4"
onChange={searchBar}/>

      <h2 className="genero-title mt-5 pl-5 text-3xl text-white">{pelisState.genero}</h2>

      </div>


       <div className="flex flex-row flex-wrap content-start	">
    
  

     {pelisFilter.map((movie, index) => (
              <div key={index} className="">
                <Link  to={`/${movie.titulo}`} state={movie} >
                  <Card movie={movie} key={index}/>
                </Link>
                </div>
            ))}

     
      </div></div>
    );
  }
}

// funcion que es destinada para una tarea especifica
// useState // hook que permite manejar el estado de un componente


/*
<input
type="text"
placeholder="Buscar"
className="mt-1 px-3 py-2 bg-slate-500 border shadow-sm border-slate-300 placeholder-slate-200 text-slate-200 focus:outline-none focus:border-sky-500 focus:ring-slate-400 block w-full rounded-md sm:text-sm focus:ring-1 m-4"
onChange={searchBar}
/>
<h2 className="genero-title mt-5">{pelisState.genero}</h2>

*/