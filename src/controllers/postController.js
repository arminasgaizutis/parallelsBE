const getPosts = (req, res) => {
  res.status(200).json({ message: 'GET POSTS' });
};

module.exports = {
  getPosts,
};
