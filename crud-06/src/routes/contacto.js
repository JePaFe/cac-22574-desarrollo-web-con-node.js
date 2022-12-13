const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const ejs = require("ejs");

const { body, validationResult } = require("express-validator");

router.get("/contacto", (req, res) => {
  res.render("contacto", { values: {} });
});

router.post(
  "/contacto",
  [
    body(
      "nombre",
      "El nombre es obligatorio y tiene que tener 3 caracteres como mínimo"
    )
      .notEmpty()
      .bail()
      .isLength(3)
      .escape(),
    body("correo", "Tiene que ser un email valido").isEmail(),
    body("edad", "Tiene que ser un numero").isInt({ min: 1 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("contacto", {
        values: req.body,
        errors: errors.array(),
      });
    }

    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "...",
        pass: "...",
      },
    });

    ejs.renderFile(
      __dirname + "/../views/contacto/correo.ejs",
      { body: req.body },
      (error, html) => {
        if (error) {
          throw error;
        }

        const options = {
          from: req.body.correo,
          to: "y@y.com",
          subject: "Nodemailer",
          html: html,
        };

        transport.sendMail(options, (error, info) => {
          if (error) {
            throw error;
          }

          console.log(info);
          
          res.send("Enviando...");
        });
      }
    );
  }
);

module.exports = router;
