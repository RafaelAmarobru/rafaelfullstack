import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
 
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";
import Promocoes from "./paginas/Promocoes";
import Contato from "./paginas/Contato";
 
function App() {
  return (
    <BrowserRouter>

    <h1 style={{textAlign: 'center'}}> Loja de Informatica</h1>
 
      {/* Item 7 - Links */}
      
      <nav style={{textAlign: 'center'}}>

        <Link to="/">Início</Link> |
        <Link to="/produtos"> Produtos</Link> |
        <Link to="/promocoes"> Promoções</Link> |
        <Link to="/contato"> Contato</Link> |
      </nav>
 
      {/* Item 6 - Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
 
    </BrowserRouter>
  );
}
 
export default App;
