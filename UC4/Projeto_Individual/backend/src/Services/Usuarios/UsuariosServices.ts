import prismaClient from "../../Prisma/PrismaClient";

interface cadusuarios {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
}

class UsuariosServices { 
    async cadastrarUsuarios ({nome, email, senha, telefone}: cadusuarios){
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
                telefone: telefone
            }
        })
        return({dados: "Dados salvos com sucesso"})
    }
}

export {UsuariosServices}