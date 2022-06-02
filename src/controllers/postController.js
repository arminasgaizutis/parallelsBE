const asyncHandler = require('express-async-handler');

const getAllPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'GET all POSTS' });
});
// const getPost = (req, res) => {
//   res.status(200).json({ message: 'GET POST' });
// };
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please fill in text field');
  }
  res.status(200).json({ message: 'CREATE POST' });
});

const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'UPDATE POST' });
});

const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'DELETE POST' });
});

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};
