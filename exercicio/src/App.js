import React from "react";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import InfoUsuario from "./Componentes/InfoUsuario/InfoUsuario";
import Nav from "./Componentes/Nav/Nav";
import "./Styles.css";

export default function App() {

  const infVideo = [

    {
      titulo: "titulo do vídeo1",
      image: <img src="https://picsum.photos/400/400?a=1" alt="" />

    },

    {
      titulo: "titulo do vídeo2",
      image: <img src="https://picsum.photos/400/400?a=1" alt="" />

    },

    {
      titulo: "titulo do vídeo3",
      image: <img src="https://picsum.photos/400/400?a=1" alt="" />

    },
    {
      titulo: "titulo do vídeo4",
      image: <img src="https://picsum.photos/400/400?a=1" alt="" />

    },

    
  ]

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <Header />

        <main>
          <Nav />

          <InfoUsuario informacoes={infVideo} reproduzir={reproduzVideo} />



        </main>

        <Footer />

      </div>
    </div>
  )
}

// export default App;
