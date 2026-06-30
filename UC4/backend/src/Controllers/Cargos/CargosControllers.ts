import {Request, Response } from 'express'

import { CargosServices } from '../../Services/Cargos/CargosServices'

class CargosControllers {
    async cadastrarCargos(req: Request, res: Response) {
        const {nome } = req.body
        const enviarDadosServices = new CargosServices
        const respota = await enviarDadosServices.cadastrarCargos(nome)
        return res.json(respota)
    }

}


export { CargosControllers }