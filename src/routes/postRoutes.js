const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getMyPosts,
} = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllPosts).post(protect, createPost);
router.route("/my-posts").get(protect, getMyPosts);
router.route("/:id").put(protect, updatePost).delete(protect, deletePost);

module.exports = router;
