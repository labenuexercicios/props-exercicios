import React from "react";

const usuario = (props) => {


  return (

    <section className="painel-de-videos">
      <div className="box-pagina-principal" onClick={props.reproduzir}>
        {props.informacoes[0].image}
        <h4>{props.informacoes[0].titulo}</h4>
      </div>

      <div className="box-pagina-principal" onClick={props.reproduzir}>
        {props.informacoes[1].image}
        <h4>{props.informacoes[1].titulo}</h4>
      </div>

      <div className="box-pagina-principal" onClick={props.reproduzir}>
        {props.informacoes[2].image}
        <h4>{props.informacoes[2].titulo}</h4>
      </div>

      <div className="box-pagina-principal" onClick={props.reproduzir}>
        {props.informacoes[3].image}
        <h4>{props.informacoes[3].titulo}</h4>
      </div>



    </section>
  )
}


export default usuario