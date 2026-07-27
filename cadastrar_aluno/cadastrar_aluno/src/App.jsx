import { useState, useEffect } from "react";

import Formulario from "./Formulario";
import ListaAlunos from "./ListaAlunos";
import Contador from "./Contador";

function App() {

  const [alunos, setAlunos] = useState([]);
  function adicionarAluno(aluno){
    setAlunos([...alunos, aluno]);
  }

  useEffect(()=>{

  document.title = 'Alunos: ${alunos.length}';
  },[alunos]);

  return(
    <div className="container">
      <h1>Cadastro de Alunos</h1>
      <Formulario adicionarAluno={adicionarAluno}/>
      <Contador quantidade={alunos.length}/>
      <ListaAlunos alunos={alunos}/>
      </div>
  );
}

export default App;