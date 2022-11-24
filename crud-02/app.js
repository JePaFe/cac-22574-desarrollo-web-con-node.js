const express = require("express");
const app = express();

app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", "./src/views");

const connection = require("./src/models/connection");

app.get("/", (req, res) => {
  connection.query("SELECT * FROM productos", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  res.render("index");
});

app.use("/posts", require("./src/routes/posts"));

const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
