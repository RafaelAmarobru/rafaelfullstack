import {Request, Response} from "express"

import { UsuariosControllers } from ''
class UsuariosControllers {
    sync cadastrousuario (req: Request, res: Response) {
        const { nome, email, senha, telefone } = req.body
    }
}

export{ UsuariosControllers}