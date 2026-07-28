import {
  BrowserRouter, link, Routes, Route
} from "react-router-dom";

import Pagina1 from ".paginas/Pagina1";
import Pagina2 from ".paginas/Pagina2";
import Pagina3 from ".paginas/Pagina3";
import Pagina4 from ".paginas/Pagina4";

function App(){
  return (
    <BrowserRouter>
    <div>
      <h1>Exemplos de Funções</h1>

      <nav>
        <link to="/">Página 1</link> |{" "}
        <link to="/pagina2">Página 2</link> |{" "}
        <link to="/pagina3">Página 3</link>
        <link to="/pagina4">Página 4</link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina3" element={<Pagina4 />} />
          </Routes>
          </div>
          </BrowserRouter>
  );
}

export default App;