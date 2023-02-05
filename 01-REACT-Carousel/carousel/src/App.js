import './App.css';
import { useState } from 'react'

function App() {
  const listaImagens = [
    "/imagens/imagem01.jpg",
    "/imagens/imagem02.jpg",
    "/imagens/imagem03.jpg",
    "/imagens/imagem04.jpg",
  ]

  const [atual, setAtual] = useState(0)

  return (
    <div className="App">
      <div className="container" style={{backgroundImage: `url(${listaImagens[atual]})`}}>
        <div className="left-arrow" onClick={() => {
              atual === 0 ? setAtual(listaImagens.length-1) : setAtual(atual-1)
            }}>
          <span className="flecha-esquerda">
          </span>
        </div>
        <div className="right-arrow" onClick={() => {
              atual === listaImagens.length-1 ? setAtual(0) : setAtual(atual+1)
            }}>
          <span className="flecha-direita"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
