const todo = require('../components/todo/network');
const response = require('./../network/response');
const codeResponse = require('../util/codes_response');
const messageResponse = require('../util/messages_response');

module.exports = (app) => {
  app.use('/todo', todo);
  app.use((req, res) => {
    response.error(
      req,
      res,
      messageResponse.PAGENOTFOUND,
      codeResponse.CODE404,
    );
  });
};
