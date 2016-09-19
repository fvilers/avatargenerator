"use strict";

const angular = require("angular");
const app = angular.module("app", [
  require("angular-messages")
]);

// Components
app.component("appGenerator", require("./components/generator"));

module.exports = app.name;
