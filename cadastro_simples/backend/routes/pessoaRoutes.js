const express =require("express");
const router=express.Router();
const pessoaController = require("../controllers/pessoaController");

router.get("/", pessoaController.listar);
router.post("/", pessoaController.inserir);
router.delete("/:id", pessoaController.excluir);

module.exports = router;