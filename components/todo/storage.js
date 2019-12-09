const mongoose = require('mongoose');
const TodoModel = require('./model');

mongoose.Promise = global.Promise;
const uri = process.env.mongo;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const create = async (todo) => {
  const model = new TodoModel(todo);
  const result = await model.save();
  return result;
};

const update = async (todo) => {
  const model = new TodoModel(todo);
  const result = await model.updateOne(model);
  return result;
};

const read = async () => {
  const todos = await TodoModel.find();
  return todos;
};

const readByState = async (state) => {
  const todos = await TodoModel.find(
    { state },
    {
      message: '', datecreate: '', dateupdate: '', state: '',
    },
  );
  return todos;
};

module.exports = {
  create, update, read, readByState,
};
