# 📋 API de Gerenciamento de Tarefas

Este é um projeto de back-end para gerenciamento de tarefas com categorias, desenvolvido com **Node.js**, **Express** e **MySQL**.

---

## 🚀 Funcionalidades

- Criar, listar, atualizar e deletar **tarefas**
- Criar, listar, atualizar e deletar **categorias**
- Relacionamento entre tarefas e categorias (1:N)
- Retorno de mensagens personalizadas e status HTTP apropriados

---

## 🔧 Tecnologias Utilizadas

- Node.js  
- Express  
- Sequelize (ORM)  
- MySQL  
- CORS  
- Postman (para testes)  
- Git (para versionamento)

---

## 🗂 Estrutura do Projeto

```
├── database/
│   ├── Conexao.js
│   ├── Categoria.js
│   └── Tarefas.js
├── index.js
├── package.json
```

---

## 🛠 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/purpesy/to-do-list.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados MySQL no arquivo:

```bash
./database/Conexao.js
```

4. Execute o projeto:

```bash
npm run dev
```

---

## 🧪 Testes

- Todas as rotas foram testadas via **Postman**
- A API retorna **status HTTP** adequados e **mensagens personalizadas**

---

## 📈 Em Desenvolvimento

- 🔜 Front-end com **ReactJS** que irá consumir essa API  
- 💻 Em breve, será feito o **deploy** do sistema completo

---

## 🙋‍♂️ Sobre mim

Sou um desenvolvedor **fullstack em formação**, com foco em **Node.js**, **React** e **MySQL**. Busco minha **primeira oportunidade profissional** e estou sempre aprendendo e evoluindo.

📫 Me acompanhe no [LinkedIn](https://www.linkedin.com/in/lucas-gabriel-5301b2331/)

---

## 📁 Licença

Este projeto está sob a **licença MIT**.  
Sinta-se à vontade para usar, estudar e contribuir!
