import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './Config/multer'

//Importação do COntroladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

// Crie a instância para reutilizar
const usuariosController = new UsuariosControllers()

// Rota de Usuários (Ajustado com letras maiúsculas nos locais corretos)
router.post('/CadastrarUsuarios', usuariosController.cadastrarUsuarios)

// 1. Correção: de visualizarusuariounicoviapost para visualizarUsuarioUnicoViaPost
router.post('/VisualizarUsuariosUnicoViaPost', usuariosController.visualizarusuariounicoviapost)

// 2. Correção: de visualizarusuariounicoviapost para visualizarUsuarioUnicoViaGet (ou a função referente ao GET)
router.get('/VisualizarUsuariosUnicoViaGet/:id', usuariosController.visualizarusuariounicoviapost)

router.put('/AlterarUsuarios', usuariosController.cadastrarUsuarios)

// 3. Correção: certifique-se de que apagarUsuarios bate exatamente com o nome no controller
router.delete('/ApagarUsuarios', usuariosController.apagarUsuarios)

router.get('/VisualizarDadosGeral', usuariosController.VisualizarDadosGeral)
export default router