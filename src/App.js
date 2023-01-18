import React from "react";
import "./styles.css";
import Card from "./components/CardVideo.js"

export default function App() {
  const cards = [
    {
      cardImg: 'https://picsum.photos/300/250.jpg',
      titulo: 'titulo1',
      userImg: 'https://cdn.pensador.com/img/authors/bo/be/bob-esponja-l.jpg',
      userName: 'Fulanóide123'
    },
    {
      cardImg: 'https://picsum.photos/300/249.jpg',
      titulo: 'titulo2',
      userImg: 'https://cdn.pensador.com/img/authors/bo/be/bob-esponja-l.jpg',
      userName: 'Fulanóide123'
    },
    {
      cardImg: 'https://picsum.photos/300/251.jpg',
      titulo: 'titulo3',
      userImg: 'https://cdn.pensador.com/img/authors/bo/be/bob-esponja-1.jpg',
      userName: 'Fulanóide123'
    },
    {
      cardImg: 'https://picsum.photos/300/252.jpg',
      titulo: 'titulo4',
      userImg: 'https://cdn.pensador.com/img/authors/bo/be/bob-esponja-l.jpg',
      userName: 'Fulanóide123'
    }
  ]
  
  return (
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
            {cards.map((objeto, index)=> <Card key={objeto.titulo} cardImg={objeto.cardImg} titulo={objeto.titulo} userImg={objeto.userImg} userName={objeto.userName}/>)}
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
  );
}
