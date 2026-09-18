function App(){
 const alunos = [
  {aluno: "João",
    cidade: "Bauru",
    estado: "SP"
  },
  {aluno: "Maria",
    cidade: "Pederneiras",
    estado: "SP"
  },
  {aluno: "José",
    cidade: "Agudos",
    estado: "SP"
  }
 ];

 return (
  <div> 
    <h1>Lista de Alunos</h1>
    {alunos.map((aluno, i ) =>(
      <div>
        <p>Aluno: {aluno.aluno}</p>
        <p>Cidade: {aluno.cidade}</p>
        <p>Estado: {aluno.estado}</p>
        {i}
        <hr />""
        </div>
    ))}
  </div>
 )
}
export default App;