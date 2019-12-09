const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const messageResponse = require('../../util/messages_response');
const codeResponse = require('../../util/codes_response');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      response.error(
        res,
        res,
        messageResponse.BODYISEMPTY,
        codeResponse.CODE500,
      );
    } else {
      const result = await controller.create(req.body);
      response.success(req, res, result, codeResponse.CODE201);
    }
  } catch (err) {
    response.error(req, res, err, codeResponse.CODE500);
  }
});

router.put('/', async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      response.error(
        res,
        res,
        messageResponse.BODYISEMPTY,
        codeResponse.CODE500,
      );
    } else {
      const result = await controller.update(req.body);
      response.success(req, res, result, codeResponse.CODE200);
    }
  } catch (err) {
    response.error(req, res, err, codeResponse.CODE500);
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await controller.read();
    response.success(req, res, result, codeResponse.CODE200);
  } catch (err) {
    response.error(req, res, err, codeResponse.CODE500);
  }
});

router.get('/:state', async (req, res) => {
  try {
    const result = await controller.readByState(req.query.state);
    response.success(req, res, result, codeResponse.CODE200);
  } catch (err) {
    response.error(req, res, err, codeResponse.CODE500);
  }
});

module.exports = router;
