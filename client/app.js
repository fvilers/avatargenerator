"use strict";

const angular = require("angular");
const app = angular.module("app", [
  require("angular-messages")
]);
const avatarGenerator = require("json!../package.json");

// Components
app.component("appDownloadCanvas", require("./components/download-canvas"));
app.component("appGenerator", require("./components/generator"));
app.component("appTitle", require("./components/title"));

// Constants
app.constant("appVersion", avatarGenerator.version);

module.exports = app.name;
