import './styles/globalstyles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from 'components/Menu';
import Home from 'pages/Home';
import SobreNos from 'pages/SobreNos';
import Contato from 'pages/Contato';
import Cardapio from 'pages/Cardapio';
import Footer from 'components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobrenos' element={<SobreNos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='*' element={<h1>Página não encontrada!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
