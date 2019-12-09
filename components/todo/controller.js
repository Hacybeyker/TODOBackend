const storage = require('./storage');

const create = async (catalog) => storage.create(catalog);

const update = async (catalog) => storage.update(catalog);

const read = async () => storage.read();

const readByState = async (state) => storage.readByState(state);

module.exports = {
  create, update, read, readByState,
};
