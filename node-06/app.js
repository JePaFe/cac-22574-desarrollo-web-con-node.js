const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
// app.set("views", "./src/views");
app.set("views", path.join(__dirname, "./src/views"));

app.get("/", (req, res) => {
  res.render("inicio", { texto: "Buenos días!!!" });
});

app.use(require("./src/routes/productos"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
