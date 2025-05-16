const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Estudar Node.js", completed: false },
  { id: 2, title: "Fazer To-Do List", completed: true },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(404).json({ message: "Titulo nao pode estar vazio." });
  } else {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
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
