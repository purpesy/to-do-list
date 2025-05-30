const Sequelize = require("sequelize");
const connection = require("./Conexao");

const Categoria = connection.define("Categoria", {
  nomeCategoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Categoria.sync({ force: false }).then(() => {
  console.log("Tabela Categoria criada com sucesso!");
});

module.exports = Categoria;
