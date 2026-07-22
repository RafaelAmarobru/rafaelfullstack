import { Router } from 'express'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'

const router = Router()

//Criação dos EndPoints
//rota de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/VisualizarUsuariosUnicoViaPost', new UsuariosControllers().visualizarusuariounicoviapost)
router.get('/VisualizarUsuariosUnicoViaGet/:id', new UsuariosControllers().visualizarusuariosunicoviget)

router.get('/VisualizarDadosGeral', new UsuariosControllers().visualizarDadosGeral)
//rota de cargos
router.post('/CadastrarCargos', new CargosControllers().cadastrarCargos)

export default router