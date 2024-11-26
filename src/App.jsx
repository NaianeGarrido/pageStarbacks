import React, { useState } from "react";
import { GlobalStyle } from "./globalStyle";
import Home from "./components/Home/Home";

function App() {
  const [imageSrc, setImageSrc] = useState("assets/img1.png");
  const [backgroundColor, setBackgroundColor] = useState("#017143");

  const trocaImagem = (src, color) => {
    setImageSrc(src);
    setBackgroundColor(color);
  };

  return (
    <>
      <GlobalStyle />
      <div className="circle" style={{ backgroundColor: backgroundColor }}></div>
      <Home imageSrc={imageSrc} backgroundColor={backgroundColor} trocaImagem={trocaImagem} />
    </>
  );
}

export default App;
