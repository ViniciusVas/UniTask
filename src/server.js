const express = require("express");

const tarefaRoutes = require("./routes/tarefaRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API UniTask funcionando!"
    });
});

app.use("/tarefas", tarefaRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});