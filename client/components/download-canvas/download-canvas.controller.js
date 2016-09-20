"use strict";

function downloadCanvasController () {
  const ctrl = this;
  const canvas = document.getElementById(ctrl.canvas);

  ctrl.download = download;

  function download () {
    window.location = canvas.toDataURL("image/png");
  }
}

module.exports = [
  downloadCanvasController
];
