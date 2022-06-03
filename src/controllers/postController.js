const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');
const User = require('../models/userModel');

//GET ALL POSTS
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();

  res.status(200).json(posts);
});

// GET MY POSTS
const getMyPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });

  res.status(200).json(posts);
});

// CREATE POST
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please fill in text field');
  }

  const post = await Post.create({
    text: req.body.text,
    img: req.body.img,
    user: req.user.id,
  });

  res.status(200).json(post);
});

const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }
  // Checking for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Making sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

//DELETE POST
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }
  // Checking for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Making sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await post.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllPosts,
  getMyPosts,
  createPost,
  updatePost,
  deletePost,
};
