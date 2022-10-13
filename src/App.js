import React from "react";
import { CardVideo } from "./components/CardVideo";
import "./styles.css";
export default function App() {

  const objeto1 = {
    titulo:"Video 1",
    autor: "Mailson",
  }
  const objeto2 = {
    titulo:"Video 2",
    autor: "Mailson",
  }
  const objeto3 = {
    titulo:"Video 3",
    autor: "Mailson",
  }
  const objeto4 = {
    titulo:"Video 4",
    autor: "Mailson",
  }
  const objeto5 = {
    titulo:"Video 5",
    autor: "Mailson",
  }
  const objeto6 = {
    titulo:"Video 6",
    autor: "Mailson",
  }
  const objeto7 = {
    titulo:"Video 7",
    autor: "Mailson",
  }
  const objeto8 = {
    titulo:"Video 8",
    autor: "Mailson",
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
            <CardVideo objeto1={objeto1}/>
            <CardVideo objeto2={objeto2}/>
            <CardVideo objeto3={objeto3}/>
            <CardVideo objeto4={objeto4}/>
            <CardVideo objeto4={objeto5}/>
            <CardVideo objeto4={objeto6}/>
            <CardVideo objeto4={objeto7}/>
            <CardVideo objeto4={objeto8}/>
           
           
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
