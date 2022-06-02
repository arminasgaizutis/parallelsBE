const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorMiddleware');
const postRoutes = require('./routes/postRoutes');
// const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.use('/api/posts', postRoutes);

app.all('*', (req, res) => {
  res.status(404).send({ error: 'Page not found' });
});
app.use(errorHandler);
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
