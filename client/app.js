"use strict";

const angular = require("angular");
const app = angular.module("app", [
]);

// Components
app.component("appHome", require("./components/home"));

module.exports = app.name;
