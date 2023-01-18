import React from "react";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props){

    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
    }
    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={props.cardImg} alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario userImg={props.userImg} userName={props.userName}/>
        </div>
    )
}