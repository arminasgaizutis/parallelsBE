const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const postRoutes = require('./routes/postRoutes');
// const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.use('/api/posts', postRoutes);

app.all('*', (req, res) => {
  res.status(404).send({ error: 'Page not found' });
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
