import { useState, useEffect } from "react";

import Formulario from "../frontend/cadastro_usuario/Formulario";
import ListaUsuarios from "./ListaUsuarios";
import Contador from "./Contador";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  function adicionarUsuario(usuario){
    setUsuarios([...usuarios, usuario]);
  }

  useEffect(()=>{
    document.title = 'Usuarios: ${usuarios.length}';
  },[usuarios]);

  return(
    <div className="container">
      <h1>Cadastro de Usuarios</h1>
      <Formulario adicionarUsuario={adicionarUsuario}/>
      <Contador quantidade={usuarios.length}/>
      <ListaUsuarios usuarios={usuarios}/>

      </div>

  );

}

export default App;