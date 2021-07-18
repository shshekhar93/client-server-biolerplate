const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  todo: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todos', TodoSchema);
