import { compare } from "bcryptjs";
import prismaClient from "../../Prisma/PrismaClient";

interface logarUsuario {
    email: string,
    senha: string
}

class LogarUsuariosServices {
    async logarUsuarios({ email, senha }: logarUsuario) {
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })
        if (!emailExiste) {
            throw new Error('Usuario ou Senha Incorretos')

        }
        const senhaCrypt = await compare(senha, emailExiste.senha)
        if (!senhaCrypt) {
            throw new Error('Senha Incorretos')
        }
    }

}

export { LogarUsuariosServices }