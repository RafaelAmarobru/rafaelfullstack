import { useState } from "react";

function Formulario({adicionarAluno }){
    
    const [nome,setNome] = useState("");
    const [idade,setIdade] = useState("");
    const [curso,setCurso] = useState("");

    function cadastrar(){

        if(nome === "" || idade === "" || curso === ""){
            alert("Preencha todos os campos.");

            return;
        }

        adicionarAluno({ nome, idade, curso});

        setNome("");
        setIdade("");
        setCurso("");

    }

    return(
        <div>
            <input type="text" placeholder="Nome" value={nome} onChange={(e)=>setNome(e.target.value)} />

            <input type="number" placeholder="Idade" value={idade} onChange={(e)=>setIdade(e.target.value)} />

            <input type="text" placeholder="Curso" value={curso} onChange={(e)=>setCurso(e.target.value)} />

            <button onClick={cadastrar}>Cadastrar</button>

            </div>
    );
}

export default Formulario;