import prismaClient from "../../Prisma/PrismaClient";
import { hash } from "bcryptjs";

interface cadUsuarios {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    data_nascimento: string;
    complemento: string

}

export class UsuariosServices {

    visualizarDadosGeral() {
        throw new Error('Method not implemented.');
    }
    async cadastrarUsuarios({nome, email, senha, telefone, endereco, cidade, estado, data_nascimento, complemento}:cadUsuarios){
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
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
                endereco: endereco, 
                cidade: cidade,
                estado: estado,
                data_nascimento: data_nascimento,
                complemento: complemento
            }
        })

        return ({dados: "Dados salvos com sucesso"})
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
                endereco: true,
                cidade: true,
                estado: true,
                data_nascimento: true,
                complemento: true
            }
        })
        return resposta
    }

    async visualizarusuariosunicoviaget(id: string){
        const resposta = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                endereco: true,
                cidade: true,
                estado: true,
                data_nascimento: true,
                complemento: true,
                status: true
            }
        })
        return resposta
    }

    async alterarUsuarios({id, nome, email, telefone, status}: AltUsuarios){
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
                status: status
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
            throw new Error ('Registro não Encontrado')
        }

        await prismaClient.usuarios.delete({
            where: {
                id: id
            }
        })
        return ({dados: 'Registro Apagado com Sucesso'})
    }
}

// exported above as 'export class UsuariosServices'