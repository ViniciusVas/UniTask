const express = require("express");
const prisma = require("./prisma");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API UniTask funcionando!"
    });
});

app.get("/tarefas", async (req, res) => {
    const tarefas = await prisma.tarefa.findMany();

    res.json(tarefas);
});

app.post("/tarefas", async (req, res) => {
    const tarefa = await prisma.tarefa.create({
        data: req.body
    });

    res.status(201).json(tarefa);
});

app.get("/tarefas/:id", async (req, res) => {
    const id = Number(req.params.id);

    const tarefa = await prisma.tarefa.findUnique({
        where: {
            id: id
        }
    });

    res.json(tarefa);
});

app.put("/tarefas/:id", async (req, res) => {
    const id = Number(req.params.id);

    const tarefa = await prisma.tarefa.update({
        where: {
            id: id
        },
        data: req.body
    });

    res.json(tarefa);
});

app.delete("/tarefas/:id", async (req, res) => {
    const id = Number(req.params.id);

    await prisma.tarefa.delete({
        where: {
            id: id
        }
    });

    res.status(204).send();
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});