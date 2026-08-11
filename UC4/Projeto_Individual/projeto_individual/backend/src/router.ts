import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';

const router = Router();

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios);
router.post('/VisualizarUsuarioUnicoViaPost', new UsuariosControllers().visualizarusuariounicoviapost)
router.get('/VisualizarUsuariosUnicoViaGet/:id', new UsuariosControllers().visualizarusuariosunicoviget)
router.put('/AlterarUsuarios', new UsuariosControllers().alterarUsuarios)
router.delete('/ApagarUsuarios', new UsuariosControllers().apagarUsuarios)

router.get('/VisualizarDadosGeral', new UsuariosControllers().visualizarDadosGeral)

export default router;