const express = require("express");
const router = express.Router();

const PostModel = require("../models/PostModel");

// CRUD

// C mostrar el formulario
router.get("/create", (req, res) => {
  res.render("posts/create");
});

const connection = require("../models/connection");
// C guardar los datos
router.post("/store", async (req, res) => {
  // console.log(req.body);
  await PostModel.create(req.body);
  // INSERT INTO `posts` (`id`,`titulo`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?);

  // connection.query("INSERT INTO posts SET ?", req.body, (error, results) => {
  //   if (error) {
  //     throw error;
  //   }

  //   console.log(results);
  // });

  res.redirect("/posts");
});

// R leer todos los registros
router.get("/", async (req, res) => {
  const posts = await PostModel.findAll();
  // console.log(posts);
  res.render("posts/index", { posts: posts });
});

// R leer un registro
router.get("/:id", async (req, res) => {
  const post = await PostModel.findByPk(req.params.id);
  res.render("posts/show", { post: post });
});

// U leer un registro, mostrar el formulario con la información
router.get("/:id/edit", async (req, res) => {
  const post = await PostModel.findByPk(req.params.id);
  res.render("posts/edit", { post: post });
});

// U actualizo los datos del registro
router.put("/:id/update", (req, res) => {});

// D borrar un registro
router.delete("/:id/delete", (req, res) => {});

module.exports = router;
