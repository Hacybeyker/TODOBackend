const serverless = require('serverless-http');
const { app } = require('./app');

const handler = serverless(app);
module.exports.todo = async (event, context) => handler(event, context);
