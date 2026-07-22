import { Request, Response } from 'express'
import {UsuariosServices} from "../../Services/Usuarios/UsuariosServices"
class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, telefone, endereco, data_nascimento, cidade, estado, complemento } = req.body
        const EnviarDadosServices = new UsuariosServices()
        const resposta = await EnviarDadosServices.cadastrarUsuarios({ 
            nome, 
            email, 
            senha, 
            telefone, 
            endereco, 
            data_nascimento, 
            cidade, 
            estado, 
            complemento
        })

        return res.json(resposta)
        
    }
    async visualizarDadosGeral(req: Request, res: Response){
        const enviarDados = new UsuariosServices()
        const respota = await enviarDados.visualizarDadosGeral()
        return res.json(resposta)
    }

    async visualizarusuariounicoviapost(req: Request, res: Response){
         const { id } = req.body
         const enviarDados = new UsuariosServices()
         const resposta = await enviarDados.visualizarusuariounicoviapost(id)
         return res.json(respota)
    }
   
}

export { UsuariosControllers }