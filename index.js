const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const connection = require("./database/Conexao");
const Tarefas = require("./database/Tarefas");
const Categoria = require("./database/Categoria");

connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
  console.log("Erro ao conectar com o banco de dados: ", error);
});

app.use(cors());
app.use(express.json());


app.get("/tarefas", (req, res) => {
  Tarefas.findAll().then((tarefas) => {
    res.json(tarefas);
  });
});

app.post("/addtarefa", (req, res) => {
  const { titulo, descricao, status, categoriaId } = req.body;

  if (titulo || descricao || status || categoriaId) {
  Tarefas.create({
    titulo,
    descricao,
    status,
    categoriaId
  }).then(() => {
    res.status(201).json({ message: "Tarefa criada com sucesso" });
  });
  } else{
    res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find((t) => t.id === parseInt(id));

  if (task) {
    if (completed != undefined) task.completed = completed;
    if (title) task.title = title;
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  taskExist = tasks.find(t => t.id === parseInt(id));
  if (!taskExist) {
    res.status(404).json({ message: "Tarefa não encontrada" });
  } else {
    tasks = tasks.filter(t => t.id !== parseInt(id));
    res.status(200).send({ message: "Deletada com sucesso" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
