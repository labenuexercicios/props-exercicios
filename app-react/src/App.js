import React from "react";
import "./styles.css";
import CardVideo from "./componentes/CardVideo";



 export default function App() {
  const video1 = {
    titulo:"Video 1",
    autor: "Giovanna",
  }
  const video2 = {
    titulo:"Video 2",
    autor: "Giovanna",
  }
  const video3 = {
    titulo:"Video 3",
    autor: "Giovanna",
  }
  const video4 = {
    titulo:"Video 4",
    autor: "Giovanna",
  }
  const video5 = {
    titulo:"Video 5",
    autor: "Giovanna",
  }
  const video6 = {
    titulo:"Video 6",
    autor: "Giovanna",
  }
  const video7 = {
    titulo:"Video 7",
    autor: "Giovanna",
  }
  const video8 = {
    titulo:"Video 8",
    autor: "Giovanna",
  }


  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

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
            <CardVideo video1={video1}/>
            <CardVideo video2={video2}/>
            <CardVideo video3={video3}/>
            <CardVideo video4={video4}/>
            <CardVideo video4={video5}/>
            <CardVideo video4={video6}/>
            <CardVideo video4={video7}/>
            <CardVideo video4={video8}/>
          </section>
          
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
