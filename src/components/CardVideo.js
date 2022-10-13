import React from "react";
import { InfoUsuarios } from "./infoUsuarios";
const titulo = "Videos";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=1 " alt="" />
        <h4>Titulo:{titulo}</h4>
        <InfoUsuarios nome= "Mailson"/>
        
      </div>
    </div>
  );
}
