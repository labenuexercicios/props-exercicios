import React from "react";
import CardVideo from "./components/CardVideo";
import InfosUsuario from "./components/InfosUsuario"
import "./styles.css";


export default function App() {
    const CardVideo1 = {
      img: "https://picsum.photos/400/400?a=1 ",
      titulo: "imagem 1",
      usuario: "Isa"
    }
    const CardVideo2 = {
      img: "https://picsum.photos/400/400?a=2 ",
      titulo: "imagem 2",
      usuario: "Isa"
    }
    const CardVideo3 = {
      img: "https://picsum.photos/400/400?a=3 ",
      titulo: "imagem 3",
      usuario: "Isa"
    }
    const CardVideo4 = {
      img: "https://picsum.photos/400/400?a=4 ",
      titulo: "imagem 4",
      usuario: "Isa"
    }
    const CardVideo5 = {
      img: "https://picsum.photos/400/400?a=5 ",
      titulo: "imagem 5",
      usuario: "Isa"
    }
    const CardVideo6 = {
      img: "https://picsum.photos/400/400?a=6 ",
      titulo: "imagem 6",
      usuario: "Isa"
    }
    const CardVideo7 = {
      img: "https://picsum.photos/400/400?a=7 ",
      titulo: "imagem 7",
      usuario: "Isa"
    }
    const CardVideo8 = {
      img: "https://picsum.photos/400/400?a=8 ",
      titulo: "imagem 8",
      usuario: "Isa"
    }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <CardVideo cardVideo = {CardVideo1}/>
        <CardVideo cardVideo = {CardVideo2}/>
        <CardVideo cardVideo = {CardVideo3}/>
        <CardVideo cardVideo = {CardVideo4}/>
        <CardVideo cardVideo = {CardVideo5}/>
        <CardVideo cardVideo = {CardVideo6}/>
        <CardVideo cardVideo = {CardVideo7}/>
        <CardVideo cardVideo = {CardVideo8}/>
        <InfosUsuario usuario = {InfosUsuario}/>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
