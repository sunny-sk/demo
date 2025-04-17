const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const userRoute = require('../backend/routes/userRoute');

const app = express();

// config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'backend/config/config.env' });
}
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const user = require('./routes/userRoute');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');
const note = require('./routes/noteRoute');

app.use('/api/v1', user);
app.use('/api/v1', product);
app.use('/api/v1', order);
app.use('/api/v1', payment);

// notes
app.use('/api/v1', note);

app.use((err, req, res, next) => {
  res.status(err.statusCode).send({ errorStack: err, message: err.message });
});

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  });
} else {
  app.get('/', (req, res) => {
      res.send('Server is Running! 🚀');
  });
}

module.exports = app;