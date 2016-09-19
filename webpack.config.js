"use strict";

const path = require("path");
const client = path.join(__dirname, "client");
const configuration = {
  entry: path.join(client, "app.js"),
  output: {
    path: path.join(__dirname, "public", "bundle"),
    filename: "app.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel?presets[]=es2015",
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV !== "production" ? "inline-source-map" : null
};

module.exports = configuration;
