import React from "react";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import InfoUsuario from "./Componentes/InfoUsuario/InfoUsuario";
import Nav from "./Componentes/Nav/Nav";
import "./Styles.css";

export default function App() {
  
  return (
    <div>
      <div className="tela-inteira">
        <Header />

        <main>
          <Nav/>

          <InfoUsuario/>
          

        </main>

        <Footer />

      </div>
    </div>
  )
}

// export default App;
