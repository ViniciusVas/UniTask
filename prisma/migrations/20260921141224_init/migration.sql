-- CreateTable
CREATE TABLE "Tarefa" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "disciplina" TEXT NOT NULL,
    "descricao" TEXT,
    "dataEntrega" TIMESTAMP(3) NOT NULL,
    "prioridade" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Tarefa_pkey" PRIMARY KEY ("id")
);
