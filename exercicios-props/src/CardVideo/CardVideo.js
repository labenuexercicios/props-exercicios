import React from "react";

const InfoUsuario = (props) => {

    const informacoesDoUsuario = props.informacoes.map((informacao) => {
        return (
        <div className="box-pagina-principal" onClick={props.reproduz}>
        {informacao.image}
        <h4>{informacao.titulo}</h4>
        </div>
        )
    })

    return (
        <section className="painel-de-videos">
            {informacoesDoUsuario}
        </section>
    )
}

export default InfoUsuario