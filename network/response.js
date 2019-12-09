const codeResponse = require('../util/codes_response');
const messageResponse = require('../util/messages_response');

const success = (req, res, message, status) => {
  res.status(status || codeResponse.CODE200).send({
    body: message,
    endpoint: {
      method: req.method,
      protocol: req.protocol,
      fullpath: req.get('host'),
      baseurl: req.baseUrl,
      originlaUrl: req.originalUrl,
      version: process.env.version,
      staging: process.env.default_stage,
    },
    verify: {
      status: true,
      code: status,
      date: new Date(),
      message: messageResponse.OK,
    },
  });
};

const error = (req, res, message, status) => {
  res.status(status || codeResponse.CODE500).send({
    body: message,
    endpoint: {
      method: req.method,
      protocol: req.protocol,
      fullpath: req.get('host'),
      baseurl: req.baseUrl,
      originlaUrl: req.originalUrl,
      version: process.env.version,
      staging: process.env.default_stage,
    },
    verify: {
      status: false,
      code: status,
      date: new Date(),
      message: messageResponse.UPS,
    },
  });
};

module.exports = { success, error };
