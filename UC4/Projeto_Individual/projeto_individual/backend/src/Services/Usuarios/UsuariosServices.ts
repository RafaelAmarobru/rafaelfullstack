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

interface AltUsuarios{
    id: string
    nome: string
    email: string
    senha: string
    telefone: string
    endereco: string
    data_nascimento: string
    cidade: string
    estado: string
    complemento: string
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

    async visualizarusuariounicoviaget(id: string){
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
                estado: true,
                complemento: true
            }
        })
        return resposta
    }

    async alterarUsuarios({ id, nome, email, telefone, status, endereco, estado, complemento}: AltUsuarios){

        const idExiste = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            }
        })

        if(!idExiste){
            throw new Error ('Registro não Encontrado')
        }
        await prismaClient.usuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,
                telefone: telefone,
                status: status,
                endereco: endereco,
                estado: estado,
                complemento: complemento
            }
        })
        return ({dados: 'Dados Alterados com Sucesso'})
    }

    async apagarUsuarios( id: string){
        const idExiste = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            }
    })

    if(!idExiste){
        throw new Error ('Registro não encontrado')
    }

    await prismaClient.usuarios.delete({
        where: {
            id: id
        }
    })

    returm ({dados: 'Registro Apagado com Sucesso'})
}
}

export {UsuariosServices}