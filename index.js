const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
