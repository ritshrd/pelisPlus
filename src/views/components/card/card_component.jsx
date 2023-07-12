import "./card_component.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

function Card({ movie }) {
  const [isLikes, setIsLiked] = useState(false);

  function handlerLike () {
      setIsLiked(!isLikes)
  }

  return (
    <div className="card-style">
      <img src={movie.portada} alt="" className="portada" />
     
      <div className="ma-10">
        <div>
          <span onClick={handlerLike}> {isLikes ? <FaHeart className="icon-red"/> : <FaRegHeart/>} </span>
        </div>
        <h1>{movie.titulo}</h1>
        <p>{movie.director}</p>
        <p>{movie.anio}</p>
        
      </div>
    </div>
  );
}

export default Card;