const express = require("express");
const router = express.Router();

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

    res.send(req.body);
  }
);

module.exports = router;
