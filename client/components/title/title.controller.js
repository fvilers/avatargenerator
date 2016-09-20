"use strict";

function titleController (appVersion) {
  const ctrl = this;

  ctrl.version = appVersion;
}

module.exports = [
  "appVersion",
  titleController
];
