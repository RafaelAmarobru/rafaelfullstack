import { Request, Response} from "express"
import { ProdutosServices } from "../../Services/Produtos/ProdutosServices"

class ProdutosControllers {
    async CadastrarProdutos(req: Request, res: Response) {
        const { nome, preco, quantidade, banner } = req.body
        if(!req.file) {
            throw new Error('Erro! Envio Não Efetuado!')
        }else {
            const {originalname, filename: banner} = req.file
            const enviarDados = new ProdutosServices()
            const resposta = await enviarDados.CadastrarProdutos({
                nome,
                preco, 
                quantidade,
                banner
            })
            return res.json(resposta)
        }
    }

    async VisualizarProdutosGeral(req: Request, res: Response) {
        const enviarDados = new ProdutosServices()
        const resposta = await enviarDados.VisualizarProdutosGeral()
        return res.json(resposta)
    }
}

export { ProdutosControllers}