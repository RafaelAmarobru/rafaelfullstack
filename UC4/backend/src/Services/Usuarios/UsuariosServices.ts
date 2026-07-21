import prismaClient from "../../Prisma/PrismaClient";

interface cadUsuarios {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    id_cargos: string
}


class UsuariosServices {
    async cadastrarUsuarios ({nome, email, senha, telefone, id_cargos}:cadUsuarios){
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: { 
                email : email
            }
        })

        if (emailExiste){
            throw new Error ('E-mail já existe')
        }
        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone,
                id_cargos: id_cargos
            }
        })

        return ({dados: "Dados salvos com sucesso"})

    }
    async visualizarDadosGeral(){
        const resposta = await prismaClient.usuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                status: true
            }
        })
        return resposta
    }

    async visualizarusuariounicoviapost(id: string){
        const resposta = await prismaClient.usuarios.findFirst({
            where: {
                id: id 
            },
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                status: true
            }
        })
        return resposta
    }
}

export {UsuariosServices}