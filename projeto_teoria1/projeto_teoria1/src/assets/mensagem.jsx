function Mensagem(props) {
    return (
        <div>
            <h1>Olá, {props.nome}!</h1>

            <button onClick={props.clicar}>
                Clique Aqui
                </button>
        </div>
    )
}

export default Mensagem;