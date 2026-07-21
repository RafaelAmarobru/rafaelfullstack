import { Request, Response } from 'express'
import {UsuariosServices} from "../../Services/Usuarios/UsuariosServices"
class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, telefone, id_cargos } = req.body
        const EnviarDadosServices = new UsuariosServices()
        const resposta = await EnviarDadosServices.cadastrarUsuarios({ nome, email, senha, telefone, id_cargos})

        return res.json(resposta)
        
    }

    async visualizarDadosGeral(req: Request, res: Response){
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.visualizarDadosGeral()
        return res.json(resposta)
    }

    async visualizarusuariounicoviapost(req: Request, res: Response){
    const { id } = req.body
    const enviarDados = new UsuariosServices()
    const resposta = await enviarDados.visualizarusuariounicoviapost(id)
    return res.json(resposta)
    }
}

export { UsuariosControllers }