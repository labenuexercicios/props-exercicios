import React from "react";

export default function InfosUsuario(props){
    return(
        <div className="usuario">
            <img src = {props.userImg} />
            <p>{props.userName}</p>
        </div>
    )
}