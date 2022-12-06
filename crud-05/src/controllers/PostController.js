const PostModel = require("../models/PostModel");

const create = (req, res) => {
  res.render("posts/create", { values: {} });
};

// const connection = require("../models/connection");

const store = async (req, res) => {
  // console.log(req.body);
  // INSERT INTO `posts` (`id`,`titulo`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?);

  // connection.query("INSERT INTO posts SET ?", req.body, (error, results) => {
  //   if (error) {
  //     throw error;
  //   }

  //   console.log(results);
  // });

  try {
    await PostModel.create(req.body);
    res.redirect("/posts");
  } catch (error) {
    res.render("posts/create", { values: req.body, errors: error.errors });
    // res.send(error);
  }
};

const index = async (req, res) => {
  const posts = await PostModel.findAll();
  // console.log(posts);
  res.render("posts/index", { posts: posts });
};

const show = async (req, res) => {
  const post = await PostModel.findByPk(req.params.id);
  res.render("posts/show", { post: post });
};

const edit = async (req, res) => {
  try {
    const post = await PostModel.findByPk(req.params.id);
    res.render("posts/edit", { post: post });
  } catch (error) {
    res.send(error);
  }

  // PostModel.findByPk(req.params.id).then((post) =>
  //   res.render("posts/edit", { post: post })
  // );
};

const update = async (req, res) => {
  // console.log(req.body);
  await PostModel.update(req.body, { where: { id: req.params.id } });
  res.redirect("/posts");
};

const destroy = async (req, res) => {
  await PostModel.destroy({ where: { id: req.params.id } });
  res.redirect("/posts");
};

module.exports = {
  create,
  store,
  index,
  show,
  edit,
  update,
  destroy,
};
