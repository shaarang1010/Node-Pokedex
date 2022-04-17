const express = require("express");
const app = express();
const port = 3500;
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
