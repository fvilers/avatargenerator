"use strict";

function generatorController () {
  const ctrl = this;
  const canvas = document.getElementById("avatar");
  const context = canvas.getContext("2d");
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height; 
  let ratio = 1;

  ctrl.shapes = [{ value: "square", name: "Square" }, { value: "circle", name: "Circle" }];
  ctrl.colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
  ctrl.generate = generate;
  ctrl.reset = reset;
  ctrl.$onInit = initialize;

  function generate (valid) {
    if (!valid) {
      return;
    }

    const nameSplit = ctrl.name.split(" "),
      initials = nameSplit[0].charAt(0).toUpperCase() + (nameSplit.length > 1 ? nameSplit[1].charAt(0).toUpperCase() : ""),
      charIndex = initials.charCodeAt(0) - 65,
      colourIndex = charIndex % 19;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = ctrl.colours[colourIndex];

    if (ctrl.shape === "square") {
      context.fillRect (0, 0, canvas.width, canvas.height);  
    }
    else if (ctrl.shape === "circle") {
      var centerX = canvas.width / ratio / 2;
      var centerY = canvas.height / ratio / 2;
      var radius = canvas.width / ratio / 2;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fill();
    }
    
    context.font = "128px Open Sans";
    context.textAlign = "center";
    context.fillStyle = "#FFF";
    context.fillText(initials, canvasWidth / 2, canvasHeight / 1.5);

    ctrl.generated = true;
  }

  function reset (form) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ctrl.name = null;
    ctrl.shape = null;
    ctrl.generated = false;
    form.$setPristine();
  }

  function initialize () {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const devicePixelRatio = window.devicePixelRatio || 1,
      backingStoreRatio = context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1
    ;

    ratio = devicePixelRatio / backingStoreRatio;

    if (devicePixelRatio !== backingStoreRatio) {
      canvas.width = canvasWidth * ratio;
      canvas.height = canvasHeight * ratio;

      canvas.style.width = canvasWidth + "px";
      canvas.style.height = canvasHeight + "px";

      context.scale(ratio, ratio);
    }
  }
}

module.exports = [
  generatorController
];
