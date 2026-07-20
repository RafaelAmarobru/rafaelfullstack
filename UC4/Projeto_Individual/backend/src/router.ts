import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';

const router = Router();

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios);

export default router;