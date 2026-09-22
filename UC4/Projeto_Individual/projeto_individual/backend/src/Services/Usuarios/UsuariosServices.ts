import prismaClient from "../../Prisma/PrismaClient";
import { hash } from "bcryptjs";

interface CadUsuarios {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    data_nascimento: string;
    complemento: string;
    id_cargos: number;
}

// Interface ajustada: apenas os campos que realmente são atualizados
interface AltUsuarios {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    status: boolean;
    id_cargos: number;
}

export class UsuariosServices {

    visualizarDadosGeral() {
        throw new Error('Method not implemented.');
    }

    async cadastrarUsuarios({ nome, email, senha, telefone, endereco, cidade, estado, data_nascimento, complemento, id_cargos }: CadUsuarios) {
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: { email }
        });

        if (emailExiste) {
            throw new Error('E-mail já existe');
        }

        const senhaHash = await hash(senha, 8);

        await prismaClient.usuarios.create({
            data: {
                nome,
                email,
                senha: senhaHash,
                telefone,
                endereco,
                cidade,
                estado,
                data_nascimento,
                complemento,
                cargo_id: Number(id_cargos),
            }
        });

        return { dados: "Dados salvos com sucesso" };
    }

    async visualizarusuariounicoviapost(id: number) {
        const resposta = await prismaClient.usuarios.findUnique({
            where: { id },
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
        });
        return resposta;
    }

    async visualizarusuariosunicoviaget(id: number) {
        const resposta = await prismaClient.usuarios.findUnique({
            where: { id },
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
        });
        return resposta;
    }

    async alterarUsuarios({ id, nome, email, telefone, status, id_cargos }: AltUsuarios) {
        const idExiste = await prismaClient.usuarios.findUnique({
            where: { id }
        });

        if (!idExiste) {
            throw new Error('Registro não Encontrado');
        }

        await prismaClient.usuarios.update({
            where: { id },
            data: {
                nome,
                email,
                telefone,
                status,
                cargo_id: Number(id_cargos),
            }
        });

        return { dados: 'Dados Alterados com Sucesso' };
    }

    async apagarUsuarios(id: number) {
        const idExiste = await prismaClient.usuarios.findUnique({
            where: { id }
        });

        if (!idExiste) {
            throw new Error('Registro não Encontrado');
        }

        await prismaClient.usuarios.delete({
            where: { id }
        });

        return { dados: 'Registro Apagado com Sucesso' };
    }
}