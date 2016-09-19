"use strict";

function generatorController () {
  const ctrl = this;

  ctrl.colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
  ctrl.generate = generate;
  ctrl.reset = reset;
  ctrl.download = download;
  ctrl.$onInit = initialize;

  function generate (valid) {
    if (!valid) {
      return;
    }

    const nameSplit = ctrl.name.split(" "),
      initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase(),
      charIndex = initials.charCodeAt(0) - 65,
      colourIndex = charIndex % 19;

    ctrl.context.fillStyle = ctrl.colours[colourIndex];
    ctrl.context.fillRect (0, 0, ctrl.canvas.width, ctrl.canvas.height);
    ctrl.context.font = "128px Open Sans";
    ctrl.context.textAlign = "center";
    ctrl.context.fillStyle = "#FFF";
    ctrl.context.fillText(initials, ctrl.canvasCssWidth / 2, ctrl.canvasCssHeight / 1.5);

    ctrl.generated = true;
  }

  function reset (form) {
    ctrl.name = null;
    ctrl.generated = false;
    form.$setPristine();
  }

  function download () {
    window.location = ctrl.canvas.toDataURL("image/png");
  }

  function initialize () {
    ctrl.canvas = document.getElementById("avatar");
    ctrl.context = ctrl.canvas.getContext("2d");

    const canvasWidth = ctrl.canvas.width,
      canvasHeight = ctrl.canvas.height;

    ctrl.canvasCssWidth = canvasWidth;
    ctrl.canvasCssHeight = canvasHeight;

    if (window.devicePixelRatio) {
      ctrl.canvas.width = canvasWidth * window.devicePixelRatio;
      ctrl.canvas.height = canvasHeight * window.devicePixelRatio;
      ctrl.canvas.style.width = ctrl.canvasCssWidth;
      ctrl.canvas.style.height = ctrl.canvasCssHeight;
      ctrl.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }
}

module.exports = [
  generatorController
];
