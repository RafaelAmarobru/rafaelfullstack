import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './Config/multer'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Criação dos EndPoints
//rota de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/VisualizarUsuariosUnicoViaPost', new UsuariosControllers().visualizarusuariounicoviapost)
router.get('/VisualizarUsuariosUnicoViaGet/:id', new UsuariosControllers().visualizarusuariosunicoviget)
router.put('/AlterarUsuarios', new UsuariosControllers().alterarUsuarios)
router.delete('/ApagarUsuarios', new UsuariosControllers().apagarUsuarios)

router.get('/VisualizarDadosGeral', new UsuariosControllers().visualizarDadosGeral)
//rota de cargos
router.post('/CadastrarCargos', new CargosControllers().cadastrarCargos)
router.post('/CadastrarProdutos', upload.single('file'), new ProdutosControllers().CadastrarProdutos)
router.get('/VisualizarProdutosGeral', new ProdutosControllers().VisualizarProdutosGeral)

export default router