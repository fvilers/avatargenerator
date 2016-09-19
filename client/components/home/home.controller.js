"use strict";

function homeController () {
  const ctrl = this;

  ctrl.generate = generate;

  function generate (valid) {
    if (!valid) {
      return;
    }
  }
}

module.exports = [
  homeController
];
