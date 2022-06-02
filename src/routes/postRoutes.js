const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/postController');

router.get('/', getPosts);
router.post('/', (req, res) => {
  res.status(200).json({ message: 'CREATE POST' });
});
router.put('/:id', (req, res) => {
  res.status(200).json({ message: `UPDATE POST ${req.params.id}` });
});
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `DELETE POST ${req.params.id}` });
});

module.exports = router;
