import prismaClient from "../../Prisma/PrismaClient"

interface CadastrarProdutos {
    nome: string
    preco: string
    quantidade: string
    banner: string
}

class ProdutosServices {
    async CadastrarProdutos({ nome, preco, quantidade, banner }: CadastrarProdutos) {
        await prismaClient.produtos.create({
            data: {
                nome: nome,
                preco: preco,
                quantidade: quantidade,
                banner: banner
            }
        })
        return ({ dados: 'Produto Cadastrado com Sucesso!' })
    }

    async VisualizarProdutosGeral() {
        const resposta = await prismaClient.produtos.findMany({
            select: {
                id: true,
                nome: true,
                preco: true,
                quantidade: true,
                banner: true
            }
        })
        return resposta
    
    }
}


export { ProdutosServices }