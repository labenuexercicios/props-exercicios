import React from "react";
import InfosUsuario from "./InfosUsuario";

const CardVideo = ( {cardVideo} ) =>{
    
    function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
    return(
        
        <>   
        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <InfosUsuario usuario = {cardVideo.usuario}/>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={cardVideo.img} alt="" />
              <h4>{cardVideo.titulo}</h4>
            </div>
          </section>
        </main> 
        </> 
    )
}

export default CardVideo