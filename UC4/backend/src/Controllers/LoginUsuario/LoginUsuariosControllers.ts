import { Request, Response } from "express";
import { LogarUsuariosServices } from "../../Services/LoginUsuario/LoginUsuariosServices";

class LoginUsuariosControllers {
    async logarUsuario(req: Request, res: Response){
        const { email, senha } = req.body
               const enviarDados = new LogarUsuariosServices()
               try {
                const resposta = await enviarDados.logarUsuarios({
                email, senha
               })
               return res.json(resposta)
               } catch (error: any) {
                return res.status(401).json({ error: error.message})
                
               }
    }

}

export { LoginUsuariosControllers }