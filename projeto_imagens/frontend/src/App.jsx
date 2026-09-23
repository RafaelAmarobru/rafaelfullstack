import { useState } from "react"; 
import "./App.css"; 
function App() { 
const [imagem, setImagem] = useState(null); 
const [mensagem, setMensagem] = useState(""); 
const [enviando, setEnviando] = useState(false); 

const selecionarImagem = (event) => { 
    const arquivo = event.target.files?.[0]; 
    setImagem(arquivo || null); 
    setMensagem(arquivo ? `Selecionada: ${arquivo.name}` : ""); 
  }; 
 
  const enviarImagem = async () => { 
    if (!imagem) { 
      setMensagem("Selecione uma imagem primeiro."); 
      return; 
    } 
 
    setEnviando(true); 
    setMensagem("Enviando imagem..."); 
 
    try { 
      const formData = new FormData(); 
      formData.append("imagem", imagem); 
 
      const resposta = await fetch("http://localhost:3001/upload", { 
        method: "POST", 
        body: formData 
      }); 
 
      const dados = await resposta.json(); 
 
      if (!resposta.ok) { 
        throw new Error(dados.mensagem || "Erro ao enviar imagem."); 
      } 
 
      setMensagem(`${dados.mensagem} ID: ${dados.id}`); 
      setImagem(null); 
      document.getElementById("arquivo").value = ""; 
    } catch (erro) { 
      setMensagem(`Erro: ${erro.message}`); 
      console.error(erro); 
    } finally { 
      setEnviando(false); 
    } 
  }; 
 
  return ( 
    <div className="container"> 
      <h1>Upload de Imagem</h1> 
      <p>Selecione uma imagem para salvar na pasta e registrar no MySQL.</p> 
      <input id="arquivo" type="file" accept="image/*" 
onChange={selecionarImagem} /> 
      <br /> 
      <button onClick={enviarImagem} disabled={enviando}>
        {enviando ? "Enviando...": "Enviar Imagem"}
      </button>
      <p className="mensagem">{mensagem}</p>
      </div>
  );
}

export default App;