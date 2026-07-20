import prismaClient from "../../Prisma/PrismaClient";

interface cadusuarios {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    endereco: string;
    data_nascimento: string;
    cidade: string;
    estado: string;
    complemento: string;
}

class UsuariosServices { 
    async cadastrarUsuarios ({nome, email, senha, telefone, endereco, data_nascimento, cidade, estado, complemento}: cadusuarios){
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })

        if (emailExiste){
            throw new Error ('E-mail já Existe')
        }
        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone,
                endereco: endereco,
                data_nascimento: data_nascimento,
                cidade: cidade,
                estado: estado,
                complemento: complemento
            }
        })
        return({dados: "Dados salvos com sucesso"})
    }
}

export {UsuariosServices}