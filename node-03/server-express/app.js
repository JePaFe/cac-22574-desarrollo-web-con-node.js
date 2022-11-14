const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Express con Nodemon");
});

app.get("/noticias", (req, res) => {
  res.send("Listado de Noticias");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
