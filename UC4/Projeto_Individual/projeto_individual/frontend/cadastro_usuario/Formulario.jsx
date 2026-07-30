import { useState } from "react";

function Formulario({ adicionarUsuario }){

    const [nome,setNome] = useState("");
    const [cpf,setCpf] = useState("");
    const [data_aniversario,setDataAniversario] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    function cadastrar(){
        if(nome === "" || cpf === ""|| data_aniversario === "" || endereco === "" || telefone === "" || email === ""){
            alert("Preencha todos os campos.");

            return;
        }
        adicionarUsuario({
            nome, 
            cpf, 
            data_aniversario,
            endereco, 
            telefone,
            email
        });

        setNome("");
        setCpf("");
        setDataAniversario("");
        setEndereco("");
        setTelefone("");
        setEmail("");
    }

    return(
        <div>
            <input 
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
            />

            <input 
            type="number"
            placeholder="Cpf"
            value={cpf}
            onChange={(e)=>setCpf(e.target.value)}
            />

            <input 
            type="date"
            placeholder="Data Aniversario"
            value={data_aniversario}
            onChange={(e)=>setDataAniversario(e.target.value)}
            />

            <input
            type="text"
            placeholder="Endereco"
            value={endereco}
            onChange={(e)=>setEndereco(e.target.value)}
            />

            <input 
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e)=>setTelefone(e.target.value)}
             />

             <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />

             <button onClick={cadastrar}>
                Cadastrar
                </button>

                </div>
    );
}

export default Formulario;