const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var DB = {
  games: [
    {
      id: 1,
      title: "Call of Duty",
      year: 2019,
      price: 60,
    },
    {
      id: 2,
      title: "God of War",
      year: 2018,
      price: 150,
    },
    {
      id: 3,
      title: "Mortal Kombat",
      year: 2019,
      price: 80,
    },
  ],
};

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);
    var game = DB.games.find((g) => g.id == id);
    if (game != undefined) {
      res.statusCode = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/game", (req, res) => {
  var { title, price, year } = req.body;

  DB.games.push({
    id: DB.games.length + 1,
    title,
    price,
    year,
  });

  res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);
    var index = DB.games.findIndex((g) => g.id == id);
    if (index == -1) {
      res.sendStatus(404);
    } else {
      DB.games.splice(index, 1);
      res.sendStatus(200);
    }
  }
});

app.put("/game/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.sendStatus(400);

  const game = DB.games.find((g) => g.id === id);
  if (!game) return res.sendStatus(404);

  const { title, price, year } = req.body;

  const hasUpdates = [title, price, year].some((v) => v !== undefined);
  if (!hasUpdates) return res.sendStatus(304); // Nada para atualizar

  if (title !== undefined) game.title = title;
  if (price !== undefined) game.price = price;
  if (year !== undefined) game.year = year;

  return res.sendStatus(200);
});

app.listen(45678, () => {
  console.log("Servidor rodando na porta 45678");
});
