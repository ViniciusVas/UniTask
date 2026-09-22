const tarefaService = require("../services/tarefaService");

async function listar(req, res) {
    const tarefas = await tarefaService.listarTarefas();

    res.json(tarefas);
}

async function buscar(req, res) {
    const id = Number(req.params.id);

    const tarefa = await tarefaService.buscarTarefa(id);

    res.json(tarefa);
}

async function criar(req, res) {
    const tarefa = await tarefaService.criarTarefa(req.body);

    res.status(201).json(tarefa);
}

async function atualizar(req, res) {
    const id = Number(req.params.id);

    const tarefa = await tarefaService.atualizarTarefa(id, req.body);

    res.json(tarefa);
}

async function excluir(req, res) {
    const id = Number(req.params.id);

    await tarefaService.excluirTarefa(id);

    res.status(204).send();
}

module.exports = {
    listar,
    buscar,
    criar,
    atualizar,
    excluir
};