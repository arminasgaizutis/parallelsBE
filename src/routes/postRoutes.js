const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').put(updatePost).delete(deletePost);

module.exports = router;
