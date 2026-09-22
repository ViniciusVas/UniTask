const prisma = require("../prisma");

async function listarTarefas() {
    return await prisma.tarefa.findMany();
}

async function buscarTarefa(id) {
    return await prisma.tarefa.findUnique({
        where: {
            id: id
        }
    });
}

async function criarTarefa(dados) {
    return await prisma.tarefa.create({
        data: dados
    });
}

async function atualizarTarefa(id, dados) {
    return await prisma.tarefa.update({
        where: {
            id: id
        },
        data: dados
    });
}

async function excluirTarefa(id) {
    return await prisma.tarefa.delete({
        where: {
            id: id
        }
    });
}

module.exports = {
    listarTarefas,
    buscarTarefa,
    criarTarefa,
    atualizarTarefa,
    excluirTarefa
};