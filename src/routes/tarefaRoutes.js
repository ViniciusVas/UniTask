const express = require("express");

const tarefaController = require("../controllers/tarefaController");

const router = express.Router();

router.get("/", tarefaController.listar);

router.get("/:id", tarefaController.buscar);

router.post("/", tarefaController.criar);

router.put("/:id", tarefaController.atualizar);

router.delete("/:id", tarefaController.excluir);

module.exports = router;