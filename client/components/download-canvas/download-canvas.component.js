"use strict";

const component = {
  bindings: {
    canvas: "@",
    initials: "<"
  },
  controller: require("./download-canvas.controller"),
  template: require("ng-cache!./download-canvas.component.html")
};

module.exports = component;
