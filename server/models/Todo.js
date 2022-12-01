const { model, Schema } = require('mongoose');

const todoSchema = new Schema({
  todo: String,
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});


module.exports = model('Todo', todoSchema);