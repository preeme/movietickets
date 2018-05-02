require('dotenv').config();
const express = require('express');
const bodyPareser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const cors = require('cors');
const errorHandler = require('./handlers/error');

const port = process.env.PORT || 8081;

app.use(cors());
app.use(bodyPareser.json());

app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is starting on port ${port}`);
});
