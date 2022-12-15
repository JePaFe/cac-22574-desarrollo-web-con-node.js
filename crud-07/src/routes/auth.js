const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");

const connection = require("../models/connection");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", (req, res) => {
  //   res.send(req.body);
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    req.body.email,
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.length == 0) {
        res.send("No existe el correo en la base de datos");
      } else {
        const user = results.shift();

        if (!bcryptjs.compareSync(req.body.password, user.password)) {
          res.send("La contraseña es incorrecta");
        } else {
          req.session.userId = user.id;
          res.redirect("/");
        }
      }
    }
  );
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  //   res.send(req.body);
  const hash = await bcryptjs.hash(req.body.password, 8);

  connection.query(
    "INSERT INTO users SET ?",
    { email: req.body.email, password: hash },
    (error, results) => {
      if (error) {
        throw error;
      }

      res.send(results);
    }
  );
});

router.get("/logout", (req, res) => {
  //   req.session.destroy(() => {
  //     res.redirect("/");
  //   });

  req.session = null;
  res.redirect("/");
});

module.exports = router;
