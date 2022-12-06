const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

app.use(require("./src/routes/contacto"));

const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
