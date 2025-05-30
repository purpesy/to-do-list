const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const connection = require("./database/Conexao");

// Importação dos models
const Tarefas = require("./database/Tarefas");
const Categoria = require("./database/Categoria");

// Configuração de relação
Categoria.hasMany(Tarefas, { foreignKey: "categoriaId" });
Tarefas.belongsTo(Categoria, { foreignKey: "categoriaId" });

// Conexão com o banco de dados
connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
  console.log("Erro ao conectar com o banco de dados: ", error);
});

// Configuração do express
app.use(cors());
app.use(express.json());


// ==============================
// Rotas para as tarefas
// ==============================

// Busca todas as tarefas com as categorias
app.get("/tarefas", (req, res) => {
  Tarefas.findAll({ include: Categoria }).then((tarefas) => {
    res.json(tarefas);
  });
});

// Cria uma nova tarefa
app.post("/addtarefa", (req, res) => {
  const { titulo, descricao, status, categoriaId } = req.body;

  if (titulo && descricao && status && categoriaId) {
    Tarefas.create({
      titulo,
      descricao,
      status,
      categoriaId
    }).then(() => {
      res.status(201).json({ message: "Tarefa criada com sucesso" });
    });
  } else {
    res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }
});

// Atualiza uma tarefa existente
app.put("/atualizartarefa/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, status, categoriaId } = req.body;

  if (titulo && descricao && status && categoriaId) {
    Tarefas.update({
      titulo,
      descricao,
      status,
      categoriaId
    }, {
      where: { id: id }
    }).then(() => {
      res.status(200).json({ message: "Tarefa atualizada com sucesso" });
    })
  } else {
    res.status(404).json({ message: "Tarefa não encontrada" });
  }

});

// Deleta uma tarefa existente
app.delete("/apagartarefa/:id", (req, res) => {
  const { id } = req.params;
  Tarefas.findByPk(id).then((tarefa) => {
    if (tarefa) {
      tarefa.destroy().then(() => {
        res.status(200).json({ message: "Tarefa deletada com sucesso" });
      });
    } else {
      res.status(404).json({ message: "Tarefa não encontrada" });
    }
  });
});

// ==============================
// Rotas para as categorias
// ==============================

// Busca todas as categorias
app.get("/categorias", (req, res) => {
  Categoria.findAll().then((categorias) => {
    res.json(categorias);
  });
});

// Cria uma nova categoria
app.post("/addcategoria", (req, res) => {
  const { nomeCategoria } = req.body;

  if (nomeCategoria) {
    Categoria.create({
      nomeCategoria
    }).then(() => {
      res.status(201).json({ message: "Categoria criada com sucesso" });
    });
  } else {
    res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }
});

// Atualiza uma categoria existente
app.put("/atualizarcategoria/:id", (req, res) => {
  const { id } = req.params;
  const { nomeCategoria } = req.body;

  if (nomeCategoria) {
    Categoria.update({
      nomeCategoria
    }, {
      where: { id: id }
    }).then(() => {
      res.status(200).json({ message: "Categoria atualizada com sucesso" });
    })
  } else {
    res.status(404).json({ message: "Categoria não encontrada" });
  }
});

// Deleta uma categoria existente
app.delete("/apagarcategoria/:id", (req, res) => {
  const { id } = req.params;
  Categoria.findByPk(id).then((categoria) => {
    if (categoria) {
      categoria.destroy().then(() => {
        res.status(200).json({ message: "Categoria deletada com sucesso" });
      });
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
