"use strict";

function downloadCanvasController ($window, $timeout) {
  const ctrl = this;
  const canvas = $window.document.getElementById(ctrl.canvas);

  ctrl.download = download;

  function download () {
    const url = canvas.toDataURL("image/png");
    const a = $window.document.createElement("a");

    $window.document.body.appendChild(a);
    a.style.cssText = "display: none";
    a.href = url;
    a.download = `${ctrl.initials}.png`;
    a.click();

    $timeout(() => {
      $window.URL.revokeObjectURL(url);
      $window.document.body.removeChild(a);
    }, 500);
  }
}

module.exports = [
  "$window",
  "$timeout",
  downloadCanvasController
];
