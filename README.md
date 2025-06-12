# API de Games 🎮

Este é um projeto de estudo de **Backend com Node.js**, utilizando **Express**, **CORS** e **Body-Parser**. A API simula um CRUD básico de games e serve como base para quem está aprendendo a criar APIs REST.

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [CORS](https://www.npmjs.com/package/cors)

---

## 🚀 Como rodar o projeto

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/apidegames.git
   cd apidegames

2. **Instale as dependências**  
   ```bash
   npm install

3. **Inicie o servidor**  
   ```bash
   nodemon index.js

🛠 Estrutura básica de rotas
GET /games → Lista todos os games

GET /game/:id → Retorna um game por ID

POST /game → Cria um novo game

PUT /game/:id → Atualiza um game existente

DELETE /game/:id → Remove um game existente


📚 Objetivo
Este projeto foi criado como um exercício prático para aprender e treinar:

Criação de rotas REST

Manipulação de dados em memória

Configuração de um servidor com Express

Integração com front-end via requisições HTTP (Axios/jQuery)

✍️ Autor
Feito com 💻 por Wagner Silva – Estudo pessoal de backend.
