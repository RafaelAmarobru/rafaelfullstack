function ListaAlunos({ alunos }){
    return(
        <div>
            <h2>Lista de Alunos</h2>

            <ul>

            {
                alunos.map((aluno,index)=>(
                <li key={index}>
                    <strong>{aluno.nome}</strong> 
                    {" - "} {aluno.idade} anos {" - "} {aluno.curso}</li>))

            }

            </ul>

            </div>
    );
}

export default ListaAlunos;