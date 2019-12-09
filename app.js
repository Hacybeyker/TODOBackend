const express = require('express');
const morgan = require('morgan');
const router = require('./network/routes');

const { json, urlencoded } = express;
const app = express();
app.set('json spaces', 2);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan(process.env.stage));

router(app);

module.exports.app = app;
