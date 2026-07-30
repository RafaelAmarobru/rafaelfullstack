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
                telefone: telefone
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

    async visualizarDadosGeral(){
        const resposta = await prismaClient.usuarios.findMany({
            select: {
                id: true, 
                nome: true,
                email: true,
                telefone: true,
                endereco: true,
                data_nascimento: true,
                cidade: true,
                estado: true,
                complemento: true
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
                status: true,
                endereco: true,
                estado: true
            }
        })
        return resposta
    }
}

export {UsuariosServices}