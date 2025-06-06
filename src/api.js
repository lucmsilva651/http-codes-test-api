const package = require("../package.json");
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const ver = package.version;

app.get(`/api/v${ver}/http/:httpCode`, function(req, res) {
  res.status(parseInt(req.params.httpCode)).send(``);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});