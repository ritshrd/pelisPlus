import "./card_component.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";


function Card({ movie }) {
  const [isLikes, setIsLiked] = useState(false);

  function handlerLike() {
    setIsLiked(!isLikes);
  }

  return (

    <div className="flex flex-col w-64 h-max m-4 duration-200 ease-out hover:-mt-1 hover:shadow-2xl hover:shadow-slate-900 rounded-lg shadow-xl bg-slate-800 " >
      <img src={movie.portada} alt="" className="rounded-tl-lg rounded-tr-lg w-64 max-h-80" />

      <div className="p-3">
        <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-300">{movie.titulo}</h1>
          <span className="cursor-pointer text-gray-400 hover:scale-125 duration-200" onClick={handlerLike}>
            {" "}
            {isLikes ? <FaHeart className="text-red-300 scale-125 duration-500" /> : <FaRegHeart />}{" "}
          </span>
        </div>
        <p className="flex  text-gray-400 rounded-md text-sm">{movie.anio}</p>
        <p className="flex  text-gray-400 rounded-md text-sm">{movie.director}</p>
        
        
      </div>
    </div>
  );
}

export default Card;
