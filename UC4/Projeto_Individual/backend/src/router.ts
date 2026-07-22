import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';

const router = Router();

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios);
router.post('/VisualizarUsuarioUnicoViaPost', new UsuariosControllers().visualizarusuariounicoviapost)

router.get('/VisualizarDadosGeral', new UsuariosControllers().visualizarDadosGeral)

export default router;