import { Request, Response } from 'express'
import {UsuariosServices} from "../../Services/Usuarios/UsuariosServices"
class UsuariosControllers {
    apagarUsuarios(arg0: string, apagarUsuarios: any) {
        throw new Error('Method not implemented.')
    }
    visualizarusuariounicoviapost(arg0: string, visualizarusuariounicoviapost: any) {
        throw new Error('Method not implemented.')
    }
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, telefone, endereco, data_nascimento, cidade, estado, complemento } = req.body
        const EnviarDadosServices = new UsuariosServices()
        const resposta = await EnviarDadosServices.cadastrarUsuarios({ nome, email, senha, telefone, endereco, data_nascimento, cidade, estado, complemento})

        return res.json(resposta)
    }
async VisualizarDadosGeral(req: Request, res: Response){
    const enviarDados = new UsuariosServices()
    const resposta = await enviarDados.visualizarDadosGeral()
    return res.json(resposta)
}

}

export { UsuariosControllers}
