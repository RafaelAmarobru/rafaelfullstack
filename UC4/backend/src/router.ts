import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './Config/multer'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'
import { LoginUsuariosControllers } from './Controllers/LoginUsuario/LoginUsuariosControllers'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))
import { estaAutenticado } from './Middleware/estaAutenticado'

//Criação dos EndPoints
//rota de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/VisualizarUsuariosUnicoViaPost', estaAutenticado, new UsuariosControllers().visualizarusuariounicoviapost)
router.get('/VisualizarUsuariosUnicoViaGet/:id', estaAutenticado,  new UsuariosControllers().visualizarusuariosunicoviget)
router.put('/AlterarUsuarios', estaAutenticado, new UsuariosControllers().alterarUsuarios)
router.delete('/ApagarUsuarios', estaAutenticado, new UsuariosControllers().apagarUsuarios)
router.post('/LoginUsuarios', new LoginUsuariosControllers().logarUsuario)

router.get('/VisualizarDadosGeral', estaAutenticado, new UsuariosControllers().visualizarDadosGeral)
//rota de cargos
router.post('/CadastrarCargos', estaAutenticado, new CargosControllers().cadastrarCargos)
router.post('/CadastrarProdutos', estaAutenticado, upload.single('file'), new ProdutosControllers().CadastrarProdutos)
router.get('/VisualizarProdutosGeral', estaAutenticado, new ProdutosControllers().VisualizarProdutosGeral)

export default router