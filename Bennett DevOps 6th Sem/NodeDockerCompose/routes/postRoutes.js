const express = require("express");

const postController = require("../controllers/postController");
const router = express.Router();


// http://localhost/api/v1/posts
router.route("/").get(postController.getAllPosts).post(postController.createPost);

// http://localhost/api/v1/posts/23879813123
router.route("/:id").get(postController.getOnePost).patch(postController.updatePost).delete(postController.deletePost);

module.exports = router;