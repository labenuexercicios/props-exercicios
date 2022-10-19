import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Nav from "./components/Nav";
import InfoUsuario from "./CardVideo/CardVideo";

import "./styles.css";

export default function App() {

  const infVideo = [
    {
      titulo: "Título do vídeo1",
      image: <img src="https://picsum.photos/400/400?a=1/"/>
    },
    {
      titulo: "Título do vídeo2",
      image: <img src="https://picsum.photos/400/400?a=2/"/>
    },
    {
      titulo: "Título do vídeo3",
      image: <img src="https://picsum.photos/400/400?a=3/"/>
    },
    {
      titulo: "Título do vídeo4",
      image: <img src="https://picsum.photos/400/400?a=4/"/>
    },
    {
      titulo: "Título do vídeo5",
      image: <img src="https://picsum.photos/400/400?a=5/"/>
    },
    {
      titulo: "Título do vídeo6",
      image: <img src="https://picsum.photos/400/400?a=6/"/>
    },
    {
      titulo: "Título do vídeo7",
      image: <img src="https://picsum.photos/400/400?a=7/"/>
    },
    {
      titulo: "Título do vídeo8",
      image: <img src="https://picsum.photos/400/400?a=8/"/>
    }
  ]

  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido!")
  }

  return (
    <div>
      <div className="tela-inteira">
        <Header/>

        <main>
          <Nav/>
          
          <InfoUsuario informacoes={infVideo} reproduz={reproduzVideo}/>
          
        </main>

        <Footer/>
      </div>
    </div>
  );
}