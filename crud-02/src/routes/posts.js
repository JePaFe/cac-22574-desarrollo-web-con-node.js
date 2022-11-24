const express = require("express");
const router = express.Router();

const PostModel = require("../models/PostModel");

// CRUD

// C mostrar el formulario
router.get("/create", (req, res) => {
  res.render("posts/create");
});
// C guardar los datos
router.post("/store", async (req, res) => {
  // console.log(req.body);
  await PostModel.create(req.body);
  res.send("creado");
});

// R leer todos los registros
router.get("/", (req, res) => {
  res.render("posts/index");
});

// R leer un registro
router.get("/:id", (req, res) => {
  res.render("posts/show");
});

// U leer un registro, mostrar el formulario con la información
router.get("/:id/edit", (req, res) => {});

// U actualizo los datos del registro
router.put("/:id/update", (req, res) => {});

// D borrar un registro
router.delete("/:id/delete", (req, res) => {});

module.exports = router;
