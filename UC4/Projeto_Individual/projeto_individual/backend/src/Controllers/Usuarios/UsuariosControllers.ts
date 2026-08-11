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
        const resposta = await enviarDados.visualizarDadosGeral()
        return res.json(resposta)
    }

    async visualizarusuariounicoviapost(req: Request, res: Response){
         const { id } = req.body
         const enviarDados = new UsuariosServices()
         const resposta = await enviarDados.visualizarusuariounicoviapost(id)
         return res.json(resposta)
    }

    async visualizarusuariosunicoviaget(req: Request, res: Response){
        const { id } = req.params
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.visualizarusuariounicoviaget(id)
        return res.json(resposta)
    }
   
    async alterarUsuarios(req: Request, res: Response){
        const { id, nome, email, senha, telefone, endereco, data_nascimento, cidade, estado, complemento} = req.body
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.alterarUsuarios({
            id,
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

    async apagarUsuarios(req: Request, res: Response){
        const { id } = req.body
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.apagarUsuarios(id)
        return res.json(resposta)
    }
}

export { UsuariosControllers }