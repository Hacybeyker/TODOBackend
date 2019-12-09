const mongoose = require('mongoose');

const SchemaObject = mongoose.Schema;
const schema = new SchemaObject({
  id: String,
  message: {
    type: String,
    required: true,
  },
  datecreate: {
    type: Date,
    required: false,
    default: Date.now,
  },
  dateupdate: {
    type: Date,
    required: false,
    default: Date.now,
  },
  state: {
    type: String,
    required: false,
    default: '0',
  },
  synced: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const todoModel = mongoose.model('todo', schema);

module.exports = todoModel;
