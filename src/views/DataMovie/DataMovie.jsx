import React from "react";
import { useLocation } from "react-router-dom";

export default function DataMovie() {
  const location = useLocation();

  const movie = location.state;

  return (
    <div className="flex lg:flex-row bg-slate-700 w-full p-8 gap-8 text-white  sm:flex-col">
      <div className="lg:w-1/3 md:w-full">
        <img className="" src={movie.portada} alt="" />
      </div>

      <div className="w-1/2">
        <div className="">
          <h1 className="text-3xl">{movie.titulo}</h1>
          <span className="text-slate-300 text-s border rounded pl-1 pr-1 bg-indigo-950 border-indigo-400 ">{movie.anio}</span>
          <h2 className="text-blue-200 text-xl pt-4">Director</h2>
          <p className="text-slate-300 text-lg">{movie.director}</p>

          <h2 className="text-blue-200 text-xl pt-4">Sinopsis</h2>
          <p className="text-slate-300 text-lg">{movie.sinopsis}</p>
          
        </div>
        <div className="">
          <div className="pt-4">
            <h2 className="text-lg text-blue-200 ">Actores:</h2>
            <ul className="text-slate-300 list-disc pl-5">
              {movie.actores.map((actor, index) => (
                <li key={index}>{actor}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
