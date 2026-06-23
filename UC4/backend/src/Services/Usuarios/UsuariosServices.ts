interface cadUsuarios {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
}


class UsuariosServices {
    async cadastrarUsuarios ({nome, email, senha, telefone}:cadUsuarios){
        
        return ({dados: "Dados salvos com sucesso"})

    }
}

export {UsuariosServices}