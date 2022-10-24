import React from "react";
import foto from "../img/fotoPerfil.png"

const InfosUsuario = (props) =>{
    
    return(
        <div>
            <h4>{props.usuario}</h4>
            <img src={foto}/>    
         </div>
        
    )
}

export default InfosUsuario