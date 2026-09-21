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

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});