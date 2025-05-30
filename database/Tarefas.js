const Sequelize = require("sequelize");
const connection = require("./Conexao");

const Tarefas = connection.define("tarefas", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("pendente", "em_andamento", "concluido"),
    allowNull: false,
  },
  categoriaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Tarefas.sync({ force: false }).then(() => {
  console.log("Tabela Tarefas criada com sucesso!");
});

module.exports = Tarefas;
