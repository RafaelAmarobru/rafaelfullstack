import prismaClient from "../../Prisma/PrismaClient";

const prisma = prismaClient as any;

interface CadastrarProdutos {
    nome: string
    preco: string
    quantidade: string
    banner: string
}

class ProdutosServices {
    async CadastrarProdutos({ nome, preco, quantidade, banner }: CadastrarProdutos) {
        await prisma.produtos.create({
            data: {
                nome: nome,
                preco: preco,
                quantidade: quantidade,
                banner: banner
            }
        })
        return ({ dados: 'Produto Cadastrado com Sucesso' })
    }

    async VisualizarProdutosGeral() {
        const resposta = await prisma.produtos.findMany({
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

export { ProdutosServices}