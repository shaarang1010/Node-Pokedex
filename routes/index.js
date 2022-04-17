const express = require("express");

const routes = express();

routes.use("/", require("./get"));
routes.use("/", require("./post"));
routes.use("/", require("./put"));
routes.use("/", require("./delete"));

module.exports = routes;
