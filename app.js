"use strict";

const express = require("express");
const path = require("path");
const root = path.join(__dirname, "public");
const app = express();

app.use(express.static(root));
app.all("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
