import { useState } from "react";

function App(){
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");

  return (
    <div>
      <h1>Cadastro de Alunos</h1>
      <input 
      type="text" placeholder="Digite o nome" value={nome} onChange={(e)=> setNome(e.target.value)}
         />
      <p>Nome Digitado: {nome}</p>
      <hr />
      <p>Você Digitou: {nome}</p>

      <input type="text" placeholder="Digite o sobrenome" value={sobreNome} onChange={(e)=> setSobreNome(e.target.value)}
        />

        <p>Nome Digitado: {nome}</p>
        <p>Sobrenome Digitado: {sobreNome}</p>
    </div>
  );
}
export default App;