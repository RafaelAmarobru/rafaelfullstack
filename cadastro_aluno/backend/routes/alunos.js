const express = require("express");

const router = express.Router();

const controller = require("../controllers/alunoController");

router.post("/", controller.inserir);

router.get("/:cpf", controller.consultar);

router.delete("/:cpf", controller.excluir);

module.exports = router;