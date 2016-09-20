"use strict";

const component = {
  bindings: {
    canvas: "@"
  },
  controller: require("./download-canvas.controller"),
  template: require("ng-cache!./download-canvas.component.html")
};

module.exports = component;
