import React from "react";
import "./Home.css";

function Home({ imageSrc, highlightColor, trocaImagem }) {
  return (
    <div>
      <div className="content">
        <div className="text-box">
          <h2>
            Mais que Café<p/>
            Isso é <span>Starbucks</span>
          </h2>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          
          <button>SAIBA MAIS!</button>
        </div>
        <div className="image-box">
          <img src={imageSrc} className="starbucks" alt="Starbucks" />
        </div>
      </div>
      <div className="menu">
        <img src="/src/assets/copop-laranja.png" className="button-menu" onClick={() => trocaImagem('/src/assets/copog-laranja.png', '#017143')} alt="VERDE" />
        <img src="/src/assets/copop-amarelo.png" className="button-menu" onClick={() => trocaImagem('/src/assets/copog-amarelo.png', '#f9f357')} alt="AMARELO" />
        <img src="/src/assets/copop-vermelho.png" className="button-menu" onClick={() => trocaImagem('/src/assets/copog-vermelho.png', '#f31e1e')} alt="VERMELHO" />
      </div>
    </div>
  );
}

export default Home;
