const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors'); // Import cors package
const helmet = require('helmet')

const projectRouter = require('./route/projectRoute.route');

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour!'
});

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Allow requests only from this origin
}));

// app.use(express.json({ limit: '10kb' }));
app.use(express.json({ limit: '100kb' }));
app.use(morgan("common"));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100kb' }));
app.use('/api', limiter);
app.use(mongoSanitize());
app.use('/api', projectRouter);

// Set cache control headers to prevent caching
// Set cache control headers to prevent caching
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Expires', '0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
});

app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

// Development logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// };



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.use(express.static('public'));

const DB = process.env.DATABASE_PASSWORD;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server Running on Port: http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection!  Shutting down');

  server.close(() => {
    process.exit(1);
  });
});



