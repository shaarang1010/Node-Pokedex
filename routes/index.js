const express = require("express");

const routes = express();

routes.use("/", require("./get"));
routes.use("/", require("./post"));
routes.use("/", require("./put"));

module.exports = routes;
