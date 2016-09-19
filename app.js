"use strict";

const express = require("express");
const app = express();

app.all("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
