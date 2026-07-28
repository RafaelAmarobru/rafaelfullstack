import Mensagem from "./Mensagem";

function App(){

    const nome = "Rafael";

    function mensagem() {
        alert("Bem-vindo!");
    }

    return (<Mensagem nome={nome} clicar={mensagem}/>);
}

export default App;