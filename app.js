"use strict";

const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const path = require("path");
const root = path.join(__dirname, "public");
const favicon = require("serve-favicon");
const app = express();

// middlewares
app.use(compression());
app.use(helmet());
app.use(favicon(path.join(root, "favicon.ico"))); 
app.use(express.static(root));
app.all("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
