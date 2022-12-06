const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

// C mostrar el formulario
router.get("/create", PostController.create);
// C guardar los datos
router.post("/store", PostController.store);

// R leer todos los registros
router.get("/", PostController.index);
// R leer un registro
router.get("/:id", PostController.show);

// U leer un registro, mostrar el formulario con la información
router.get("/:id/edit", PostController.edit);
// U actualizo los datos del registro
router.put("/:id/update", PostController.update);

// D borrar un registro
router.delete("/:id/delete", PostController.destroy);

module.exports = router;
