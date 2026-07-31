import { useEffect, useState } from "react";
import axios from "axios";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [pessoas, setPessoas] = useState([]);

    function carregarPessoas() {
        axios
            .get("http://localhost:3001/pessoas")
            .then((resposta) => {
                setPessoas(resposta.data);
            });

    }

    useEffect(() => {
        carregarPessoas();
    }, []);

    function salvar() {
        axios
            .post("http://localhost:3001/pessoas", {
                nome: nome
            })
            .then(() => {
                setNome("");
                carregarPessoas();
            });

    }

    function excluir(id) {
        axios
            .delete('http://localhost:3001/pessoas/${id')
            .then(() => {
                carregarPessoas();

            });
    }

    return (
        <div className="container">
            <h1>Cadastro de Pessoas</h1>
            <input type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <buton onClick={salvar}>Salvar</buton>

            <hr />

            <table>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Nome:</th>
                        <th>Ações:</th>

                    </tr>
                </thead>

                <tbody>
                    {pessoas.map((pessoa) => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                            <td>
                                <button
                                    onClick={() => excluir(pessoa.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Cadastro;