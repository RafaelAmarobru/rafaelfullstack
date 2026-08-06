import { useState } from "react";
import api from "../services/api";

function FormAluno(){

    const [cpf, setCpf]=useState("");
    const [nome, setNome]=useState("");
    const [email, setEmail]=useState("");
    const [celular, setCelular]=useState("");

    const [resultado,setResultado]=useState("");

    async function inserir(){
        try{
            await axios.post(api,{
                cpf,
                nome, 
                email,
                celular
            });

            alert("Aluno cadastrado com sucesso");
        }catch(erro){
            alert("Erro ao cadastrar aluno.");

        }
    }

    async function consultar() {
        try {
            const resposta = await axios.get('${api}/${cpf}');

             if (resposta.data.length === 0) { 
 
                setResultado("Aluno não encontrado."); 
 
            } else { 
 
                const aluno = resposta.data[0]; 
 
                setResultado( 
 
`CPF: ${aluno.cpf} 
 
Nome: ${aluno.nome} 
 
Email: ${aluno.email} 
 
Celular: ${aluno.celular}` 
 
                ); 
 
            } 
 
        } catch { 
 
            setResultado("Erro ao consultar."); 
 
        } 
 
    } 
 
    //---------------------------------------- 
    // Excluir 
    //---------------------------------------- 
 
    async function excluir() { 
 
        try { 
 
            await axios.delete(`${api}/${cpf}`); 
 
            alert("Aluno excluído."); 
 
            setResultado(""); 
 
        } catch { 
              alert("Erro ao excluir."); 
 
        } 
 
    } 
 
    //---------------------------------------- 
 
    return ( 
 
        <main className="container"> 
 
            <h2>Cadastro de Alunos</h2> 
 
            <input 
                type="text" 
                placeholder="CPF" 
                value={cpf} 
                onChange={(e)=>setCpf(e.target.value)} 
            /> 
 
            <input 
                type="text" 
                placeholder="Nome" 
                value={nome} 
                onChange={(e)=>setNome(e.target.value)} 
            /> 
 
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
            /> 
 
            <input 
                type="text" 
                placeholder="Celular" 
                value={celular} 
                onChange={(e)=>setCelular(e.target.value)} 
            /> 
 
            <div className="botoes"> 
 
                <button onClick={inserir}> 
                    Inserir 
                </button> 
<button onClick={consultar}> 
                    Consultar 
                </button> 
 
                <button onClick={excluir}> 
                    Excluir 
                </button> 
 
            </div> 
 
            <textarea 
                rows="8" 
                value={resultado} 
                readOnly 
            /> 
 
        </main> 
 
    ); 
 
} 
 
export default FormAluno; 