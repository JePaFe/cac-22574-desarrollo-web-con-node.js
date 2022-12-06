const db = require("./db");
const { DataTypes } = require("sequelize");

const PostModel = db.define("posts", {
  titulo: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: {
        args: true,
        msg: "Solo se permiten letras",
      },
      len: {
        args: [3, 12],
        msg: "Tiene que tener entre 3 y 12 caracteres",
      },
    },
  },
  contenido: {
    type: DataTypes.TEXT,
  },
});

module.exports = PostModel;
