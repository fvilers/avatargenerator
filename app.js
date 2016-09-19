"use strict";

const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const path = require("path");
const root = path.join(__dirname, "public");
const favicon = require("serve-favicon");
const ensureSsl = require("./ensure-ssl");
const app = express();

// middlewares
app.use(compression());
app.use(helmet());
app.use(ensureSsl, favicon(path.join(root, "favicon.ico"))); 
app.use(ensureSsl, express.static(root));
app.all("*", ensureSsl, (req, res) => {
  res.status(404).sendFile("404.html", { root: __dirname });
});

module.exports = app;
