import { compare } from "bcryptjs";
import prismaClient from "../../Prisma/PrismaClient";
import { sign } from 'jsonwebtoken'

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

        const token = sign({
            id: emailExiste.id,
            nome: emailExiste.nome,
            email: emailExiste.email
        },
            process.env.JWT_SECRETO,
            {
                subject: emailExiste.id,
                expiresIn: '8h'
            }
        )
        return {
            id: emailExiste.id,
            nome: emailExiste.nome,
            email: emailExiste.email,
            token: token
        }
    }

}

export { LogarUsuariosServices }