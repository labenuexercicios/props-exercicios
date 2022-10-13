import React from "react";
import { InfoUsuario } from "./InfoUsuario";


export function CardVideo(props){
        function reproduzVideo() {
            alert("O vídeo está sendo reproduzido");
        }
        console.log(props)
    return (
       
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={props.imagem} alt="" />
              <h4>{props.titulo}</h4>
              <InfoUsuario  usuario = {props.usuario} />
            </div>
    )
}