const path = require('path');
const connectDB = require('./lib/db');
const express = require('express');
const session = require('express-session');
const todoRouter = require('./routes/todos');
const app = express();

const PORT = process.env.PORT || 8000;
const staticPath = path.join(__dirname, '../client/build');

connectDB();

app.use(express.static(staticPath));
app.use(express.json());
app.use(session({
  secret: 'Keyboard Cat',
  saveUninitialized: false,
  resave: true
}));
app.use('/v1/todos', todoRouter);

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}`);
});
